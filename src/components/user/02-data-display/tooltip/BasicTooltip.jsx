// COMPONENT PROPS ____________________ //
//* title    = 'String'
//* children = <object>

import Tooltip from '@mui/material/Tooltip';

const BasicTooltip = ({title, children}) => {

  return (

    <Tooltip title={title}>
      {children}
    </Tooltip>
  )
}

export default BasicTooltip;