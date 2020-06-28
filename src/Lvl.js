import React from 'react'
import {useSkillsContext} from './services/skills'

const lvls = [
    0,
    300,
    600,
    900,
    1200,
    1500,
    1900,
    2300,
    2700,
    3100,
    3600,
    4280,
    4960,
    5640,
    6320,
    7000,
    9600,
    12200,
    14800,
    17400,
    20000,
    24000,
    28000,
    32000,
    36000,
    40000,
    49000,
    58000,
    67000,
    76000,
    85000,
    102000,
    119000,
    136000,
    153000,
    170000,
    206000,
    242000,
    278000,
    314000,
    350000,
    380000,
    410000,
    440000,
    470000,
    500000,
    560000,
    620000,
    680000,
    740000,
    800000,
    880000,
    960000,
    1040000,
    1120000,
    1200000,
    1340000,
    1480000,
    1620000,
    1760000,
    1900000,
    2060000,
    2220000,
    2380000,
    2540000,
    2700000,
    2880000,
    3060000,
    3240000,
    3420000,
    3600000,
    3800000,
    4000000,
    4200000,
    4400000,
    4600000,
    4820000,
    5040000,
    5260000,
    5480000,
    5700000,
    5960000,
    6220000,
    6480000,
    6740000,
    7000000,
    7300000,
    7600000,
    7900000,
    8200000,
    8500000,
    8840000,
    9180000,
    9520000,
    9860000,
    10200000,
    10560000,
    10920000,
    11280000,
    11640000,
    12000000,
    12400000,
    12800000,
    13200000,
    13600000,
    14000000,
    14500000,
    15000000,
    15500000,
    16000000,
    16500000,
    17040000,
    17580000,
    18120000,
    18660000,
    19200000,
    19760000,
    20320000,
    20880000,
    21440000,
    22000000,
    22700000,
    23400000,
    24100000,
    25800000,
    25500000,
    26260000,
    27020000,
    27780000,
    28540000,
    29300000,
    30140000,
    30980000,
    31820000,
    32660000,
    33500000,
    34480000,
    35460000,
    36440000,
    37420000,
    38400000,
    39480000,
    40560000,
    41640000,
    42720000,
    43800000,
    45040000,
    46280000,
    47520000,
    48760000,
    50000000,
    51360000,
    52720000,
    54080000,
    55440000,
    56800000,
    58340000,
    59880000,
    61420000,
    62960000,
    64500000,
    66260000,
    68020000,
    69780000,
    71540000,
    73300000,
    75240000,
    77180000,
    79120000,
    81060000,
    83000000,
    85200000,
    87400000,
    89600000,
    91800000,
    94000000,
]

export const Lvl = () => {
    const {sum} = useSkillsContext()

    return (
        <>
            <span>Уровень: {sum}</span>
            <br/>
            <span>Опыт: {lvls[sum]}</span>
        </>
    )
}
