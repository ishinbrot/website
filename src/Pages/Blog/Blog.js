
import React, { useState, useEffect } from 'react';
import { ToText, openLink } from '../../assets/helperFunctions'
import GridComponent from '../../Components/GridComponent/GridComponent'
import classes from './Blog.module.css'
var blogList =   [];


const BlogSummary = <p className={classes.BlogList}>Hello. This page contains a list of the blog posts I have written on medium. This list will continue to get updated as I continue to update my blog. Enjoy reading!
</p>
const Blog = () => {


    const [blogItems, setBlogItems] = useState({
        items: [],
        isLoading: true,
        error: null
    })
    const [loading, setLoading] = useState(true);
    const [profile, setProfile] = useState({
        name: 'Ian Shinbrot',
        profileImage: '',
        profileUrl: ''
    })

    var populateBlogList = (blogListData) => {
            return blogListData.posts.map((post,index) => {
                var blogPost = {};
                blogPost.title = post.Title;
                blogPost.description=post.Title;
                blogPost.click=post.Title;
                blogPost.linkTitle=post.Title;
            
            })
           // setLoading(false);

    }
    const mediumURL =
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@ianshinbro";
  
    useEffect(() => {
        let isMounted = true;
      async function fetchPostDetails() {
        fetch(mediumURL)
          .then(res => res.json())
          .then(info => {
            
              const image= info.feed.image;
              const link = info.feed.link;
              const blogs = info.items;
              var posts = [];
              //const posts = blogs.filter(post => post.categories.length > 0)
              info.items.map((item, index) => {
                var post = {
                key: index,
                title: item.title,
                description: ToText(item.description.substring(0,250)),
                click: () => openLink(item.link),
                linkTitle: "View Blog Post",
                categories: item.categories
                }
                posts.push(post);
            });
  
              setProfile( p=> ({...p, profileUrl: link, profileImage: image}))
              setBlogItems({items: posts})
         //     populateBlogList({posts});


          })
          .catch(err => setBlogItems({error: err.message}))
    }
    fetchPostDetails();
}, []);




    return (
        <div>
            {BlogSummary}
       {loading && blogItems.items  <=0? 'Loading...' : 
       <GridComponent cards={blogItems.items} />   }
        </div>
    );
}
export default Blog;
