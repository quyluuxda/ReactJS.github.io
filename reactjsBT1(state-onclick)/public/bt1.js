// function getName(name){
//     alert(name);
// }
// class Bien extends React.Component{
//     getInformation() {
//         alert(this.props.children);
//       }
//     render(){
//         return (<div>
//         <h1> {this.props.name} - {this.props.unit} </h1>
//         <p>{this.props.children}</p>
//         <Bien1 />
//         <button onClick={()=>{let str = this.props.name + " " + this.props.unit; getName(str) }}>Lấy thông tin</button>
//          </div>)
//         }
// };
// // {this.getInformation.bind(this,this.props.children)}
// class Bien1 extends React.Component{
//     render(){
//         return (<div>
//          <p className="stylecolor">Đây là bài test</p>
//          </div>)
//         }
// };

class Com extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            num: this.props.num,
        }
        this.add = this.add.bind(this);
    }
    add() {
        this.state.num = parseInt(this.state.num) + 1
        this.setState(this.state);
    }
    render() {
        return (
            <button onClick={this.add}>Hello {this.state.num}</button>
        );
    }
}

class Album extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            img: this.props.img,
        }
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }
    next(){
        if(this.state.img< 4){
            this.state.img=parseInt(this.state.img) + 1
        }else{this.state.img= 4}
        this.setState(this.state);
    }
    previous(){
        if(this.state.img > 1){
            this.state.img=parseInt(this.state.img) - 1
        }else{this.state.img= 1}
        this.setState(this.state);
    }
    render(){
        return (
            <div>
            <img className="div-style" src={"img/"+ this.state.img +".png"}/>
            <hr/>
            <button onClick={this.next}>Next</button>
            <button onClick={this.previous}>Previous</button>
            </div>
        );
    }
}
ReactDOM.render(
    <div>
        <h1>Làm quen với state và sự kiện onClick</h1>
        <Com num="0" />
        <Album img = "2" />
    </div>
    , document.getElementById("root"));