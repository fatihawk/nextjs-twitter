import React from 'react'

import cn from 'classnames'
import styles from './title-bold.module.css'

function TitleBold ({bold=true, children}) {
    return <h2 className={cn([styles.title, bold && styles.bold])}>{children}</h2>
}

export default TitleBold