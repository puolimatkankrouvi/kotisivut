import React,{Component} from 'react';


class Image extends Component{

  constructor(props){
  	super(props);
  }

	render(){
		return(
			<div>
			  <img class="equip" src="./m50.jpg" />
			  
			</div>
		);
	}
}

export default Image;

//Shows image in modal window
			  /*<div className="modal-fade" role="dialog" id={this.props.id} >
			    <div className="modal-dialog" role="document">
			      <div className="modal-content">
			        <div className="modal-body">
			          <img href={require("./m50.jpg")} />
			        </div>
			      </div>
			    </div>
			  </div>*/