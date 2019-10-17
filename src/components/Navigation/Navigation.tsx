import React, { FC, useState,  ReactNode, ReactElement} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styles from './NavigationStyles.module.scss';
import Content from '../Content/Content';

const Navigation: FC = (): ReactElement => {

  const paths: string[] = ['javascript', 'html', 'css', 'react', 'colours', 'images', 'backgrounds', 'snippets'];
  const [allPaths, ] = useState(paths);

  return (
        <div className={styles.NavigationWrapper}>
          <div className={styles.NavigationBox}>
          <Router>
            {allPaths.map((path: string): ReactNode => (
              <span className={styles.NavItem}>
                <Link className={styles.NavigationText} to={`/${path}`} >{path}</Link>
              </span>
            ))}
            <Route exact path="/" component={Content} />
            <Route path="/:path" component={Content} />
          </Router>
          </div>
        </div>
    );
};

export default Navigation;