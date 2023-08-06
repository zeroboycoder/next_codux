import classNames from 'classnames';
import styles from './contact.module.scss';

export interface ContactProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Contact = ({ className }: ContactProps) => {
    return (
        <div className={classNames(styles.root, className)} style={{ textAlign: 'left' }}>
            <h2 style={{fontSize: '28px'}}>Touch me</h2>
            <div>
                <form>
                    <label>Name</label>
                    <br />
                    <input type="text" className={styles.input} />
                    <br />
                    <label>Email</label>
                    <br />
                    <input type="text" className={styles.input} />
                    <br />
                    <label>Message</label>
                    <br />
                    <textarea className={styles.input} style={{height: '4rem'}} />
                    <br />
                    <input type="submit" value="Submit" className={styles.submit_btn} style={{color: 'white'}} />
                </form>
            </div>
        </div>
    );
};
