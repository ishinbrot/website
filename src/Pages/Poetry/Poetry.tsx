import React, { useCallback, useMemo, useState } from 'react';
import classes from './Poetry.module.css';
import GridComponent from '../../Components/GridComponent/GridComponent';
import CustomDialog from '../../Components/Layout/CustomModal/CustomDialog';
import Poems from './poem-data';
import Poem from './models/poem';

const summary = <p className={classes.Summary}>Here are some poems I started during the 2020 lock down, and have continued throughout 2021.
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

  const openPoem = useCallback((poem: Poem) => {
    setPoemText(poem.text);
    setPoemTitle(poem.title);
    setShowPoem(true);
  }, []);

  const closeDialog = useCallback(() => {
    setShowPoem(false);
  }, []);

  const gridCards = useMemo((): PoetryGridCard[] => {
    return Poems.map((poem) => ({
      title: poem.title,
      description: poem.year,
      linkTitle: poem.linkTitle,
      link: () => {},
      click: () => openPoem(poem),
    }));
  }, [openPoem]);

  return (
      <div>
        {summary}
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
