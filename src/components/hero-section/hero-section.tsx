import classNames from 'classnames';
import styles from './hero-section.module.scss';

export interface HeroSectionProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const HeroSection = ({ className }: HeroSectionProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    lineHeight: '',
                }}
            >
                <h2 className={styles.title}>Welcome to NEXT</h2>
                <h3
                    style={{
                        margin: '0.7rem 0',
                        fontSize: '20px',
                    }}
                    className={styles.subtitle}
                >
                    Let&apos;s challenge your next step.
                </h3>
                <hr
                    style={{
                        width: '180px',
                        height: '3px',
                        border: 'none',
                        backgroundColor: '#f00',
                        margin: '.3rem 0 .7rem 0',
                    }}
                />
                <p
                    style={{
                        width: '60%',
                        margin: '0px 0px 0.7rem',
                        fontSize: '16px',
                    }}
                >
                    Our organisation helps the youths who want to get a job, learn programming at
                    home by providing qualified courses and majors.
                </p>
                <button
                    style={{
                        outline: 'none',
                    }}
                >
                    Let's Rock 🎉
                </button>
            </div>
        </div>
    );
};
