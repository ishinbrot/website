import React, { useEffect, useState } from 'react';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import {
  formatMiles,
  formatMovingTime,
  formatRunDate,
  getStravaStats,
  StravaStatsPayload,
} from '../../utils/strava/client';

type StravaStatsProps = {
  variant?: 'compact' | 'full';
};

const StravaStats: React.FC<StravaStatsProps> = ({ variant = 'compact' }) => {
  const [stats, setStats] = useState<StravaStatsPayload | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      setLoading(true);
      setError(null);
      try {
        const payload = await getStravaStats();
        if (!cancelled) {
          setStats(payload);
        }
      } catch (e: unknown) {
        if (!cancelled) {
          setError(e instanceof Error ? e.message : 'Could not load Strava stats.');
          setStats(null);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }
    load();
    return () => {
      cancelled = true;
    };
  }, []);

  const latestRun = stats?.recentRuns[0];

  return (
    <Card variant="outlined" elevation={0} sx={{ overflow: 'visible' }}>
      <CardContent>
        <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1.5 }}>
          <DirectionsRunIcon color="secondary" />
          <Typography variant="h6" component="h2" sx={{ fontWeight: 600 }}>
            Strava
          </Typography>
        </Stack>

        {loading ? (
          <Stack spacing={1.5}>
            <Stack direction="row" spacing={2}>
              <Skeleton variant="rounded" width="33%" height={56} />
              <Skeleton variant="rounded" width="33%" height={56} />
              <Skeleton variant="rounded" width="33%" height={56} />
            </Stack>
            <Skeleton variant="text" width="70%" />
          </Stack>
        ) : null}

        {error ? (
          <Alert severity="warning">
            Running stats are unavailable right now.{' '}
            <Link
              href="https://www.strava.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Strava
            </Link>
          </Alert>
        ) : null}

        {!loading && !error && stats ? (
          <Box>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              divider={<Divider orientation="vertical" flexItem sx={{ display: { xs: 'none', sm: 'block' } }} />}
              sx={{ mb: variant === 'full' ? 2 : 1.5 }}
            >
              <StatBlock label="YTD miles" value={formatMiles(stats.ytd.distanceMeters)} />
              <StatBlock label="YTD runs" value={String(stats.ytd.count)} />
              {variant === 'full' ? (
                <StatBlock label="All-time miles" value={formatMiles(stats.allTime.distanceMeters)} />
              ) : (
                <StatBlock
                  label="Latest"
                  value={latestRun ? latestRun.name : '—'}
                  hint={latestRun ? formatRunDate(latestRun.startDate) : undefined}
                />
              )}
            </Stack>

            {variant === 'full' ? (
              <Box>
                <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
                  Recent runs
                </Typography>
                {stats.recentRuns.length === 0 ? (
                  <Typography variant="body2" color="text.secondary">
                    No recent runs yet.
                  </Typography>
                ) : (
                  <Stack component="ul" spacing={1} sx={{ m: 0, p: 0, listStyle: 'none' }}>
                    {stats.recentRuns.map((run) => (
                      <Box
                        component="li"
                        key={run.id}
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          gap: 2,
                          flexWrap: 'wrap',
                        }}
                      >
                        <Typography variant="body2" sx={{ fontWeight: 500 }}>
                          {run.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {formatMiles(run.distanceMeters)} mi · {formatMovingTime(run.movingTimeSeconds)} ·{' '}
                          {formatRunDate(run.startDate)}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>
                )}
              </Box>
            ) : null}

            {stats.profileUrl ? (
              <Button
                size="small"
                endIcon={<OpenInNewIcon fontSize="small" />}
                href={stats.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ mt: 2 }}
              >
                View on Strava
              </Button>
            ) : null}
          </Box>
        ) : null}
      </CardContent>
    </Card>
  );
};

type StatBlockProps = {
  label: string;
  value: string;
  hint?: string;
};

const StatBlock: React.FC<StatBlockProps> = ({ label, value, hint }) => (
  <Box sx={{ minWidth: 0, flex: 1 }}>
    <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 0.25 }}>
      {label}
    </Typography>
    <Typography
      variant="h6"
      component="p"
      sx={{
        fontWeight: 600,
        lineHeight: 1.25,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      }}
    >
      {value}
    </Typography>
    {hint ? (
      <Typography variant="caption" color="text.secondary">
        {hint}
      </Typography>
    ) : null}
  </Box>
);

export default StravaStats;
