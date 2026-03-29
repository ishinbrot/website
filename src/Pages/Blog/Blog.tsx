import React, { useState, useEffect } from 'react';
import { ToText, openLink } from '../../assets/helperFunctions';
import GridComponent from '../../Components/GridComponent/GridComponent';
import classes from './Blog.module.css';

type CardItem = {
  key: number;
  title: string;
  description: string;
  click: () => void;
  linkTitle: string;
  categories: string[];
}

const BlogSummary = <p className={classes.BlogList}>Hello. This page contains a list of the blog posts I have written on medium. This list will continue to get updated as I continue to update my blog. Enjoy reading!
</p>

const Blog: React.FC = () => {
  const [blogItems, setBlogItems] = useState<{ items: CardItem[]; isLoading?: boolean; error?: string | null }>({
    items: [],
    isLoading: true,
    error: null
  });
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState({
    name: 'Ian Shinbrot',
    profileImage: '',
    profileUrl: ''
  });

  const mediumURL =
    'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@ianshinbro';

  useEffect(() => {
    async function fetchPostDetails() {
      fetch(mediumURL)
        .then(res => res.json())
        .then(info => {
          const image = info.feed.image;
          const link = info.feed.link;
          const posts: CardItem[] = [];
          info.items.map((item: any, index: number) => {
            const post: CardItem = {
              key: index,
              title: item.title,
              description: ToText(item.description.substring(0,250)),
              click: () => openLink(item.link),
              linkTitle: 'View Blog Post',
              categories: item.categories
            };
            posts.push(post);
          });

          setProfile(p => ({...p, profileUrl: link, profileImage: image}))
          setBlogItems({items: posts})
          setLoading(false);
        })
        .catch(err => setBlogItems({items: [], error: err.message}))
    }
    fetchPostDetails();
  }, []);

  return (
      <div>
          {BlogSummary}
          {loading && blogItems.items.length <= 0 ? 'Loading...' : 
            <GridComponent cards={blogItems.items as any} />}
      </div>
  );
}
export default Blog;




