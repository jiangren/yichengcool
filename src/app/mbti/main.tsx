'use client'
import React, {useState, useCallback} from 'react';
import { questions } from './questions';
import styles from './page.module.scss';

// 随机生成question 问题顺序
const newQuestions = questions.map(({ question, choice_a, choice_b }) => {
    const isChange = Math.random() > 0.5;
    return {
        question,
        choice_a: isChange ? choice_b : choice_a,
        choice_b: isChange ? choice_a : choice_b
    }
});

const questionsLen = newQuestions.length;

const Main = () => {
    const [index, setIndex] = useState(0);
    const [score, setScore] = useState<string[]>([]);
    const [showRes, setShowRes] = useState(false);
    const [result, setResult] = useState<any>({});

    const nextClick = useCallback((num: number) => {
        setIndex((pre) => {
            const curPre = pre + num;
            return curPre >= 0 && curPre < questionsLen ? curPre : pre;
        })
    }, []);

    const choiceClick = useCallback((value: string) => {
        setScore((pre: string[]) => {
            const newScore = [...pre];
            newScore[index] = value;
            return newScore;
        });
        nextClick(1);
    }, [index, nextClick]);

    const getResult = useCallback(() => {
        const characterMap: any = {
            P: 0,
            J: 0,
            S: 0,
            N: 0,
            E: 0,
            I: 0,
            F: 0,
            T: 0,
        };

        score.forEach((val) => {
            if (val) {
                characterMap[val]++;
            }
        });

        setResult({
            itemList: [
                `E-${characterMap.E} / I-${characterMap.I}`,
                `S-${characterMap.S} / N-${characterMap.N}`,
                `T-${characterMap.T} / F-${characterMap.F}`,
                `J-${characterMap.J} / P-${characterMap.P}`
            ],
            showText: `${characterMap.E > characterMap.I ? 'E' : 'I'}${characterMap.S > characterMap.N ? 'S' : 'N'}${characterMap.T > characterMap.F ? 'T' : 'F'}${characterMap.J > characterMap.P ? 'J' : 'P'}`
        });
        setShowRes(true);
    }, [score]);

    const restart = useCallback(() => {
        setIndex(0);
        setScore([]);
        setShowRes(false);
        setResult({});
    }, []);

    const question = newQuestions[index];
    const scoreVal = score[index] || '';
    console.log('result', result);
    return (
        <div className={styles.content}>
            {
                !showRes ?
                (
                    <>
                        <div className={styles.question}>
                            <div className={styles.title}>{index+1}/{questionsLen} {question.question}</div>
                            <div className={`${styles.q} ${question.choice_a.value === scoreVal && styles.selected}`} onClick={() => choiceClick(question.choice_a.value)}>A. {question.choice_a.text}</div>
                            <div className={`${styles.q} ${question.choice_b.value === scoreVal && styles.selected}`} onClick={() => choiceClick(question.choice_b.value)}>B. {question.choice_b.text}</div>
                        </div>
                        <div className={styles.action}>
                            {
                                index > 0
                                    ? <div className={`${styles.left} ${styles.btn}`} onClick={() => nextClick(-1)}>上一题</div>
                                    : <div></div>
                            }
                            {
                                index < questionsLen - 1
                                    ? <div className={`${styles.right} ${styles.btn}`} onClick={() => nextClick(1)}>下一题</div>
                                    : <div className={`${styles.right} ${styles.btn}`} onClick={getResult}>查看结果</div>
                            }
                        </div>
                    </>
                 ) : (
                    <div className={styles.result}>
                        <div className={styles.itemWrap}>
                            {
                                result?.itemList.map((item: any) => (
                                    <div key={item} className={styles.item}>{item}</div>
                                ))
                            }
                        </div>
                        <div className={styles.res}>{result?.showText}</div>
                        <div className={styles.restart} onClick={restart}>重新测试</div>
                    </div>
                )
            }
        </div>
    )
}

export default Main;