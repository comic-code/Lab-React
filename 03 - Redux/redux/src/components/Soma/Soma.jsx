import React from 'react';
import { connect } from 'react-redux';

import Card from '../Card/Card';

function Soma(props) {
  
  const { min, max } = props.numbers;

  return(
    <Card title="Soma de um Número" blue>
      <div>
        <span>
          <span>Resultado: </span>
          <strong>{min + max}</strong>          
        </span>
      </div>
    </Card>
  )
}


function mapStateToProps(state) {
  return {
    numbers: state.numbers,
  }
}

export default connect(mapStateToProps)(Soma)