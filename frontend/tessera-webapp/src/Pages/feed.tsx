import { Button, Checkbox, TextField, OutlinedInput, InputLabel, MenuItem, FormControl, ListItemText, Select, checkboxClasses} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { setFlagsFromString } from "v8";
import { usePosts } from "../App";
import PostComponent from "../Components/PostComponent";
import { Post } from "../DataTypes/Post";
import { posts, retrievePosts, eventTypes } from "../Utility/data";


export default function FeedPage() {
  const {posts, setPosts} = usePosts();
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([])

  //Retrieve posts from backend
  useEffect(() => {
    retrievePosts.then((res: Post[]) => {
      console.log("Post-page has been updated!")
      console.log(res.length)
      setPosts(res)
    }).catch(message => {
      console.log("Error: " + message);
    })
  }, [])

  useEffect(() => {
    setFilteredPosts(posts.filter(post => "" + post.active === "true"))
  }, [posts])

  return (
    <main style={{ padding: "1rem 0" }}>

      <div className="threeColumnFlex">
        <div className="sidebarColumn">
          <Sidebar posts_for_sidebar={posts} setFilteredPosts={setFilteredPosts}/>
        </div>
        <div className="feedColumn">
          {
            //As long as there are posts
            filteredPosts.length !== 0 ?

            filteredPosts.map((post: Post) => (
              <PostComponent key={post.id} post={post}/>
            ))
            :
            <>
              <h2>No posts found</h2>
            </>
          }

        </div>
        <div className="column-3">
          <Outlet context={posts} />
        </div>
      </div>
    </main>
  );
}

interface SidebarProps {
  posts_for_sidebar: Post[];
  setFilteredPosts: (posts: Post[]) => void;
}

function Sidebar(props: SidebarProps) {
  const navigate = useNavigate();

  //Define neccesary variables for seachbar
  const [query, setQuery] = useState("");
  const [boxSelling, setBoxSelling] = useState(true);
  const [boxBuying, setBoxBuying] = useState(true);
  const [boxInactive, setBoxInactive] = useState(false);

  const [locations, setLocations] = useState<string[]>([])
  const [locationNames, setlocationNames] = useState<string[]>([])

  const [selectedEventTypes, setSelectedEventTypes] = useState<string[]>([])


  useEffect(() => {
    updateFilteredPosts();
  }, [boxInactive, query, boxSelling, boxBuying, locationNames, selectedEventTypes]);

  useEffect(() => {
    let temp_locations: string[] = posts.map( (post: Post) => post.location);
    setLocations(Array.from(new Set(temp_locations)));
  }, [posts])

  function redirect() {
    navigate("/newpost")
  }

  /**
   * 
   * @param e - input event to retrieve whether button is checked
   */
  const handleChangeSelling = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBoxSelling(e.target.checked);
  };

  const handleChangeBuying = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBoxBuying(e.target.checked);
  };

  const handleChangeInactive = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBoxInactive(e.target.checked);
  };

  /**
   * @effects update feed to only show filtered items by query
   * @requires all posts from feed
   * @returns and updated feed page with filtered posts
   */
  function updateFilteredPosts(){
    console.log("Total number of prosts: " + props.posts_for_sidebar.length)

    
    const filteredPosts = [ ...props.posts_for_sidebar].filter(post =>
      (
      /** Filter out inactive posts if boxinactive is not checked */
      ((boxInactive === false) && ("" + post.active === "true")) ||

      /** Display inactive posts if checkbox is checked */
      (boxInactive && (("" + post.active === "true") || ("" + post.active === "false")) )) 
      &&
      /** Filter on Selling and Buying checkboxes */
      ((boxSelling && post.postType === "Selling") || (boxBuying && post.postType === "Buying")) && 

      /** Filter on search query */
      (
        (query === "") ||
        (post.title.toLowerCase().includes(query.toLowerCase()))
      ) && 
      
      /** Filter on selected locations */
      ( 
        (locationNames.length === 0) || 
        (locationNames.find(loc => post.location === loc))
  
      ) &&

      /** Filter on selected eventtypes */
      ( 
        (selectedEventTypes.length === 0) ||
        ((selectedEventTypes.length > 0) && (selectedEventTypes.find(ev => post.eventType === ev)))
  
      )
    ) 
    
    console.log("Number of filtered posts: " + filteredPosts.length)
    props.setFilteredPosts(filteredPosts)
  }

  return (
    <div className="sidebar" >
      <Button variant="contained" className="newpostbutton" style={{ fontSize: '20px' }} onClick={redirect} > New Post</Button >
      <div className="searchBar">
        <TextField id="outlined-basic" className='textField' label="Search titles!" variant="outlined" onChange={event => setQuery(event.target.value)}/>
      </div>    
        <MultipleSelectCheckmarks locations={locations} setLocations={setLocations} locationNames={locationNames} setLocationNames={setlocationNames} selectedEventTypes={selectedEventTypes} setSelectedEventTypes={setSelectedEventTypes}/>

      <label>
        Selling
        <Checkbox
          onChange={(e: any) => setBoxSelling(e.target.checked)}
          checked={boxSelling}
        />
      </label>
      <label>
        Buying
        <Checkbox
          onChange={(e: any) => setBoxBuying(e.target.checked)}
          checked={boxBuying}
        />
      </label>
      <label>
        Inactive
        <Checkbox
          onChange={(e: any) => setBoxInactive(e.target.checked)}
          checked={boxInactive}
        />
      </label>
    </div>
  )
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

interface MultipleSelectCheckmarksProps {
  locations: string[];
  setLocations: (locations: string[]) => void;
  locationNames: string[];
  setLocationNames: (locations: string[]) => void;
  selectedEventTypes: string[];
  setSelectedEventTypes: (eventTypes: string[]) => void;
}

//Function for drop-down-menu for location
export function MultipleSelectCheckmarks(props: MultipleSelectCheckmarksProps) {

  const handleLocation = (event: any) => {
    console.log(event.target.value)
    const tempSelectedLocations = event.target.value

    if(tempSelectedLocations){
      props.setLocationNames(event.target.value)
    }
  }

  const handleEventTypes = (event: any) => {
    console.log(event.target.value)
    const tempEventTypes = event.target.value

    if(tempEventTypes){
      props.setSelectedEventTypes(event.target.value)
    }
  }

  return (
    <div>
      <h3> </h3>
    <div>
      <FormControl sx={{ m: 0, width: 200 }}>
        <InputLabel id="demo-multiple-checkbox-label">Locations</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={props.locationNames}
          onChange={handleLocation}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {props.locations.map((location: string) => (
            <MenuItem key={location} value={location}>
              <Checkbox checked={props.locationNames.indexOf(location) > -1} />
              <ListItemText primary={location} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
    <h6> </h6>
    <div>
    <FormControl sx={{ m: 0, width: 200 }}>
      <InputLabel id="demo-multiple-checkbox-label">EventTypes</InputLabel>
      <Select
        labelId="demo-multiple-checkbox-label"
        id="demo-multiple-checkbox"
        multiple
        value={props.selectedEventTypes}
        onChange={handleEventTypes}
        input={<OutlinedInput label="Tag" />}
        renderValue={(selected) => selected.join(', ')}
        MenuProps={MenuProps}
      >
        {eventTypes.map((eventType: string) => (
          <MenuItem key={eventType} value={eventType}>
            <Checkbox checked={props.selectedEventTypes.indexOf(eventType) > -1} />
            <ListItemText primary={eventType} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  </div>
  </div>
  );
}
