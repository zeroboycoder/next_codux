import classNames from 'classnames';
import styles from './nav-bar.module.scss';

export interface NavBarProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const NavBar = ({ className }: NavBarProps) => {
    return (
        <div className={classNames(styles.nav)}>
            <h2 style={{ fontWeight: 700 }}>NEXT</h2>
            <ul
                className={styles.nav_link}
                style={{
                    listStyle: 'none',
                    alignItems: 'center',
                }}
            >
                <li style={{ marginRight: '20px' }}>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/contact">Contact</a>
                </li>
            </ul>
        </div>
    );
};
