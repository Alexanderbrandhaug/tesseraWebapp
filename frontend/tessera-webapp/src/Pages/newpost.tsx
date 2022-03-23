import { MenuItem, Select, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Post } from "../DataTypes/Post";
import { createPosts, eventTypes } from "../Utility/data";
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';



type eventTypesType = typeof eventTypes[number]

export default function NewPostPage() {

  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState(0);
  const [eventType, setEventType] = useState<eventTypesType>(eventTypes[0]);

  const [date, setDate] = useState<string>("")
  const [dateError, setDateError] = useState<boolean>(false)

  const [time, setTime] = useState<string>("")
  const [timeError, setTimeError] = useState<boolean>(false)

  const [contactPoint, setContactPoint] = useState("");
  const [description, setDescription] = useState("");
  const [isSelling, setIsSelling] = useState<boolean>(false);

  const [loadingPost, setLoadingPost] = useState<boolean>(false);
  const [errorOcurred, setErrorOcurred] = useState<string>("")

  const navigate = useNavigate();

  function redirect(path: string) {
    navigate(path)
  }
  
  /**
   * @requires date and time fields correctly formatted and connection to backend
   * @effects
   * @param e - event type. Used to prevent default form behaviour.
   */
  function submitPost(e: any){
    e.preventDefault()
    const postID = 1234
    /**@todo get username from localstorage */
    const username: string = localStorage.getItem("username") ?? "undefined_";

    let userID: number = 0
    let ls_userID = localStorage.getItem("userID");
    if(typeof ls_userID === "string"){
      userID = +ls_userID
    }

    const createdAt = "0"
    const active = "True"
    let postType = isSelling ? "Selling" : "Buying";

    if(dateError || timeError){
      setErrorOcurred("Error: Time or Date has invalid format. Should be yyyy-mm-dd and HH:MM")
    }else{
      const post = new Post(postID, username, userID, title, location, description, createdAt, date + "T" + time, price, contactPoint, active,  postType, eventType)
      createPosts(post).then( (res: Post[] | string) => {
          redirect("/feed")
          window.location.reload();
      }).catch( (res) => {
          setErrorOcurred("Error: Could not post.");
          console.log(res)
      }).finally(() => {
        setLoadingPost(false)
      })

      setLoadingPost(true);
    }
  }

  /**
   * @effects Checks whether input text has format yyyy-mm-dd
   * @param e - holds event data
   */
  function onDatePickerChanged(e: any){
    let regex = /^((?:(?:1[6-9]|2[0-9])\d{2})(-)(?:(?:(?:0[13578]|1[02])(-)31)|((0[1,3-9]|1[0-2])(-)(29|30))))$|^(?:(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00)))(-)02(-)29)$|^(?:(?:1[6-9]|2[0-9])\d{2})(-)(?:(?:0[1-9])|(?:1[0-2]))(-)(?:0[1-9]|1\d|2[0-8])$/
    let input = e.target.value
    //If correct day/month/year format we accept the input
    if(regex.test(input)){
      setDateError(false)
      setDate(input)
    }else{
      setDateError(true)
    }
  }

   /**
   * @effects Checks whether input e.target.value har format HH:MM
   * @param e - holds event data
   */
  function onTimePickerChanged(e: any){
    let regex = /^([0-1][0-9]|[2][0-3]):([0-5][0-9])$/
    let input = e.target.value

    if(regex.test(input)){
      setTimeError(false)
      setTime(input)
    }else {
      setTimeError(true)
    }
  }

  return (
    <main className="newPostPage">
      {
        loadingPost ?
        <div>
          Loading
        </div>
        :
        <div>
           <form className="newPostForm" onSubmit={(e) => submitPost(e)}>
          <label>
            Selling (checked)   |   Buying (unchecked)
            <Checkbox
              checked={isSelling}
              onChange={() => setIsSelling(!isSelling)}
            />
          </label>
          
            <TextField  inputProps={{ style: { color: "#2196f3", fontWeight:"bolder" } }}
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
            />
         

          
            <TextField  inputProps={{ style: { color: "#2196f3", fontWeight:"bolder" } }}
              type="text"
              name="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Location"
            ></TextField>
         
         <FormControl size="medium"  >
            <Select  style={{color: "#2196f3", fontWeight:"bold"}} size= "medium"  value={eventType}  onChange={(e) => setEventType(e.target.value)}>
              {eventTypes.map((type) => <MenuItem value={type}>{type}</MenuItem>)}
            </Select>
            </FormControl>

          
            
            <TextField  inputProps={{ style: { color: "#2196f3", fontWeight:"bolder" } }} error={dateError} placeholder="yyyy-mm-dd" onChange ={(e) => onDatePickerChanged(e)}/>
         

          
            <TextField  inputProps={{ style: { color: "#2196f3", fontWeight:"bolder" } }} error={timeError} placeholder="HH:MM" onChange ={(e) => onTimePickerChanged(e)}/>
         

          
            <TextField inputProps={{ style: { color: "#2196f3", fontWeight:"bolder" } }}
              type="text"
              value={contactPoint}
              placeholder="Contact point"
              onChange={(e) => setContactPoint(e.target.value)}
            />
          

         
            <TextField  inputProps={{ style: { color: "#2196f3", fontWeight:"bolder" } }}
              type="number"
              value={price}
              onChange={(e) => setPrice(+e.target.value)}
              placeholder="NOK"
            />
         

         <Box mt={4}>
            <TextField  inputProps={{ style: { color: "#2196f3", fontWeight:"bolder" } }} style={{ width: 400 }}
            multiline={true}
           minRows={5}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
            ></TextField>
            </Box>
          <Box mt={4}>
          <label>
            <Button variant="contained" type="submit" value="Submit">Create Post</Button>
            
          </label>
          </Box>
        </form>
        {errorOcurred === "" ?
        <></>
        :
        <label className="error">{errorOcurred}</label>
        }
        </div>
      }
    </main>
  );
}

