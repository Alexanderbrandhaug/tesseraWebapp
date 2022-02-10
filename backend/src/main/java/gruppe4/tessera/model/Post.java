package gruppe4.tessera.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GenerationType;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Table(name = "posts")
public class Post {
   
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)// ID will be used as primarykey and will be autoincremented
    private Integer id;
    @Column(nullable = false)
    private String title, date, location, description, contactPoint;
    @Column(name = "buy_or_sell_post", nullable = false)
    private String buyOrSellType;
    @Column(name = "type_of_post", nullable = false)
    private String typeOfPost;
    @Column(nullable = false)
    private int price;
    @Column(nullable = false)
    private boolean activeOrUnactive;

    public void setTitle(String title){
        this.title = title;
    }
    public String getTitle(){
        return title;
    }
    public void setBuyOrSellType(String buyOrSellType){
        this.buyOrSellType = buyOrSellType;
    }
    public String getbuyOrSellType(){
        return buyOrSellType;
    }
    public void setTypeOfPost(String typeOfPost){
        this.typeOfPost = typeOfPost;
    }
    public String getTypeOfPost(){
        return typeOfPost;
    }
    public void setDate(String date){
        this.date = date;
    }
    public String getDate(){
        return date;
    }
    public void setLocation(String location){
        this.location = location;
    }
    public String getLocation(){
        return location;
    }
    public void setDescription(String desctription){
        this.description = desctription;
    }
    public String getDescription(){
        return description;
    }
    public void setPrice(int price){
        this.price = price;
    }
    public int getPrice(){
        return price;
    }
    public void setContactPoint(String contactPoint){
        this.contactPoint = contactPoint;
    }
    public String getContactPoint(){
        return contactPoint;
    }
    public void setActiveOrUnactive(boolean activeOrUnactive){
        this.activeOrUnactive = activeOrUnactive;
    }
    @JsonProperty("Show post")
    public boolean getActiveOrUnactive(){
        return activeOrUnactive;
    }













}
