import classNames from 'classnames';
import styles from './animation.module.scss';
import {motion} from 'framer-motion'
import Lottie from 'react-lottie';
import codeLottie from '../../assets/code_lottie.json';

export interface AnimationProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Animation = ({ className }: AnimationProps) => {
    return <div className={classNames(styles.root, className)}>
        <motion.div initial={{opacity:0, scale:0}} animate={{opacity:1, scale:1}} transition={{delay:0.5, duration: 0.5}}>
            <Lottie options={{
                loop: true,
                autoplay: true, 
                animationData : codeLottie
            }} height={500} />
        </motion.div>
    </div>;
};
