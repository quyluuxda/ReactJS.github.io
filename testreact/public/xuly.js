function getName(name){
    alert(name);
}
class Bien extends React.Component{
    getInformation() {
        alert(this.props.children);
      }
    render(){
        return (<div>
        <h1> {this.props.name} - {this.props.unit} </h1>
        <p>{this.props.children}</p>
        <Bien1 />
        <button onClick={()=>{let str = this.props.name + " " + this.props.unit; getName(str) }}>Lấy thông tin</button>
         </div>)
        }
};
// {this.getInformation.bind(this,this.props.children)}
class Bien1 extends React.Component{
    render(){
        return (<div>
         <p className="stylecolor">Đây là bài test</p>
         </div>)
        }
};


ReactDOM.render(
    <div>
        <Bien name = "NodeJS" unit = "Bài 1">Đây là children</Bien>
        <Bien name = "ReactJS" unit = "Bài 2">Đây là children</Bien>
        <Bien name = "VueJS" unit = "Bài 3">Đây là children</Bien>
    </div>
    , document.getElementById("root"));