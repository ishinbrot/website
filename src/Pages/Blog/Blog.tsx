import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Skeleton from '@mui/material/Skeleton';
import Alert from '@mui/material/Alert';
import Divider from '@mui/material/Divider';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import { ToText, openLink } from '../../assets/helperFunctions';

type BlogPost = {
  key: number;
  title: string;
  description: string;
  link: string;
  categories: string[];
};

const mediumFeedUrl =
  'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@ianshinbro';

function openInNewTab(url: string): void {
  window.open(url, '_blank', 'noopener,noreferrer');
}

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [profileUrl, setProfileUrl] = useState('');
  const [profileImage, setProfileImage] = useState('');

  useEffect(() => {
    let cancelled = false;
    async function fetchPosts() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(mediumFeedUrl);
        const info = await res.json();
        if (cancelled) return;
        if (info.status !== 'ok' && info.message) {
          throw new Error(info.message);
        }
        const items = info.items || [];
        const mapped: BlogPost[] = items.map((item: any, index: number) => ({
          key: index,
          title: item.title,
          description: ToText(item.description.substring(0, 280)),
          link: item.link,
          categories: Array.isArray(item.categories) ? item.categories.filter(Boolean) : [],
        }));
        setPosts(mapped);
        if (info.feed) {
          setProfileUrl(info.feed.link || '');
          setProfileImage(info.feed.image || '');
        }
      } catch (e: unknown) {
        if (!cancelled) {
          setError(e instanceof Error ? e.message : 'Could not load posts.');
          setPosts([]);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    fetchPosts();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <Box>
      <Box
        sx={{
          mb: 4,
          pb: 3,
          borderBottom: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
          <RssFeedIcon color="primary" sx={{ fontSize: 32 }} />
          <Typography variant="h4" component="h1" sx={{ fontWeight: 600, letterSpacing: '-0.02em' }}>
            Blog
          </Typography>
        </Stack>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 560, mb: 2 }}>
          Articles published on Medium—mostly tech, projects, and things I am learning. New posts appear
          here automatically from the feed.
        </Typography>
        {profileUrl ? (
          <Stack direction="row" alignItems="center" spacing={2} flexWrap="wrap" useFlexGap>
            {profileImage ? (
              <Box
                component="img"
                src={profileImage}
                alt=""
                sx={{
                  width: 48,
                  height: 48,
                  borderRadius: 1,
                  border: '1px solid',
                  borderColor: 'divider',
                  objectFit: 'cover',
                }}
              />
            ) : null}
            <Button
              variant="outlined"
              size="small"
              startIcon={<OpenInNewIcon />}
              onClick={() => openInNewTab(profileUrl)}
            >
              Open Medium profile
            </Button>
          </Stack>
        ) : null}
      </Box>

      {loading ? (
        <Stack spacing={2}>
          {[0, 1, 2].map((s) => (
            <Card key={s} variant="outlined" elevation={0}>
              <CardContent>
                <Skeleton variant="text" width="70%" height={28} sx={{ mb: 1 }} />
                <Skeleton variant="text" width="100%" />
                <Skeleton variant="text" width="95%" />
                <Skeleton variant="text" width="40%" sx={{ mt: 1 }} />
              </CardContent>
            </Card>
          ))}
        </Stack>
      ) : null}

      {error ? (
        <Alert severity="warning" sx={{ mb: 2 }}>
          {error} You can still{' '}
          <Button size="small" onClick={() => openLink('https://medium.com/@ianshinbro')}>
            browse Medium directly
          </Button>
          .
        </Alert>
      ) : null}

      {!loading && !error && posts.length === 0 ? (
        <Card variant="outlined" elevation={0} sx={{ p: 3, textAlign: 'center', bgcolor: 'action.hover' }}>
          <Typography color="text.secondary">
            No posts loaded yet. Check back soon or visit{' '}
            <Button size="small" onClick={() => openLink('https://medium.com/@ianshinbro')}>
              Medium
            </Button>
            .
          </Typography>
        </Card>
      ) : null}

      {!loading && posts.length > 0 ? (
        <Stack spacing={2.5} component="ol" sx={{ listStyle: 'none', m: 0, p: 0 }}>
          {posts.map((post) => (
            <Box component="li" key={post.key}>
              <Card variant="outlined" elevation={0} sx={{ overflow: 'visible' }}>
                <CardContent sx={{ pb: 1 }}>
                  <Typography
                    variant="h6"
                    component="h2"
                    sx={{
                      fontWeight: 600,
                      fontSize: '1.1rem',
                      lineHeight: 1.35,
                      mb: 1,
                      color: 'primary.main',
                    }}
                  >
                    {post.title}
                  </Typography>
                  {post.categories.length > 0 ? (
                    <Stack direction="row" flexWrap="wrap" gap={0.75} sx={{ mb: 1.5 }}>
                      {post.categories.slice(0, 5).map((cat) => (
                        <Chip key={cat} label={cat} size="small" variant="outlined" />
                      ))}
                    </Stack>
                  ) : null}
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75 }}>
                    {post.description}
                    {post.description.length >= 275 ? '…' : ''}
                  </Typography>
                </CardContent>
                <Divider />
                <CardActions sx={{ px: 2, py: 1.5, justifyContent: 'flex-end' }}>
                  <Button
                    size="small"
                    endIcon={<OpenInNewIcon fontSize="small" />}
                    onClick={() => openInNewTab(post.link)}
                  >
                    Read on Medium
                  </Button>
                </CardActions>
              </Card>
            </Box>
          ))}
        </Stack>
      ) : null}

      {!loading && posts.length > 0 ? (
        <Box sx={{ mt: 4, pt: 2, borderTop: '1px solid', borderColor: 'divider' }}>
          <Typography variant="caption" color="text.disabled">
            Posts load from the Medium RSS feed and update when you publish something new.
          </Typography>
        </Box>
      ) : null}
    </Box>
  );
};

export default Blog;
