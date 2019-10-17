import React, { ReactElement } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import styles from './Content.module.scss';

interface SelectedPath {
  path: string
};

const Content = (props: RouteComponentProps<SelectedPath>): ReactElement => {
  const path = props.match.params.path;
  return (
    <div className={styles.ResourceCardWrapper}>
      {`Hello ${path}`}
    </div>
  );
};

export default Content;