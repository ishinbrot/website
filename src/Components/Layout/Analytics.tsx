import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { posthog } from '../../analytics';

const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    posthog.capture('$pageview', {
      path: location.pathname,
    });
  }, [location.pathname]);

  return null;
};

export default Analytics;