import React from 'react';
import { connect } from 'rect-redux';

const CharacterList = ({ characters }) => 
	<div id='character-list' className='col-md-6'>
		<h1>Characters</h1>
		<ul>
			{
				characters.map( c => 
					<li key={ c.name }>{ c.name }</li>
				)
			}
		</ul>
	</div>

const mapStateProps = ({ characters }) => ({ characters });

export default connect(mapStateProps)(CharacterList);