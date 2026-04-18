import React, { useCallback, useMemo, useState } from 'react';
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import classes from './Poetry.module.css';
import GridComponent from '../../Components/GridComponent/GridComponent';
import CustomDialog from '../../Components/Layout/CustomModal/CustomDialog';
import Poems from './poem-data';
import Poem from './models/poem';

const summary = <p className={classes.Summary}>Here are some poems I started during the 2020 lock down, and have continued since then.
<br/> I hope you enjoy reading them!</p>

type PoetryGridCard = {
  title: string;
  description: string;
  linkTitle: string;
  link: () => void;
  click: () => void;
};

const Poetry: React.FC = () => {
  const [showPoem, setShowPoem] = useState(false);
  const [poemText, setPoemText] = useState('');
  const [poemTitle, setPoemTitle] = useState('');
  const [selectedYear, setSelectedYear] = useState<string>('');

  const openPoem = useCallback((poem: Poem) => {
    setPoemText(poem.text);
    setPoemTitle(poem.title);
    setShowPoem(true);
  }, []);

  const closeDialog = useCallback(() => {
    setShowPoem(false);
  }, []);

  /**
   * Get unique years from all poems, sorted in descending order
   */
  const uniqueYears = useMemo(() => {
    const years = Array.from(new Set(Poems.map((poem) => poem.year))).sort().reverse();
    return years;
  }, []);

  /**
   * Filter poems based on selected year
   */
  const filteredPoems = useMemo(() => {
    if (!selectedYear) {
      return Poems;
    }
    return Poems.filter((poem) => poem.year === selectedYear);
  }, [selectedYear]);

  const gridCards = useMemo((): PoetryGridCard[] => {
    return filteredPoems.map((poem) => ({
      title: poem.title,
      description: poem.year,
      linkTitle: poem.linkTitle,
      link: () => {},
      click: () => openPoem(poem),
    }));
  }, [filteredPoems, openPoem]);

  return (
      <div>
        {summary}
        
        {/* Year Filter */}
        <Box sx={{ mb: 3, display: 'flex', justifyContent: 'flex-end' }}>
          <FormControl sx={{ minWidth: 150 }}>
            <InputLabel id="year-select-label">Filter by Year</InputLabel>
            <Select
              labelId="year-select-label"
              id="year-select"
              value={selectedYear}
              label="Filter by Year"
              onChange={(e) => setSelectedYear(e.target.value)}
            >
              <MenuItem value="">All Years</MenuItem>
              {uniqueYears.map((year) => (
                <MenuItem key={year} value={year}>
                  {year}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        <GridComponent cards={gridCards} />
        {showPoem ? (
          <CustomDialog
            display={showPoem}
            click={closeDialog}
            text={
              <p>
                {poemText.split('\n').map((line: string, idx: number) => (
                  <div key={idx}>{line}</div>
                ))}
              </p>
            }
            title={poemTitle}
          />
        ) : null}
      </div >
  );
};
export default Poetry;