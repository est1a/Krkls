import React from 'react'
import {Devices} from './Devices'
import {Weapons} from './Weapons'
import styles from './Items.module.css'
import {Panel} from './Panel'

export const Items = () => (
    <div className={styles.items}>
        <div className={styles.column}>
            <Panel title="Устройства" content={<Devices/>}/>
        </div>
        <div className={styles.column}>
            <Panel title="Оружие" content={<Weapons/>}/>
        </div>
    </div>
)