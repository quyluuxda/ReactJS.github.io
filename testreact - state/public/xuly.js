function getName(name) {
    alert(name);
}

class InputTag extends React.Component{
    constructor(props){
        super(props);
        this.show = this.show.bind(this);
    }
    show(){
        let text = this.textInput.value;
        alert(text);
    }
    render(){
        return(
            <div>
                <input type="text" ref={(input)=>{this.textInput = input}}/>
                <button onClick={this.show}>OK</button>      
            </div>
        )
    }
};


class Bien extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            totalStudents: this.props.totalStudents,
        }
        this.addStudent = this.addStudent.bind(this);
    }
    addStudent() {
        this.state.totalStudents = parseInt(this.state.totalStudents) + 1
        this.setState(this.state);
    }
    getInformation() {
        alert(this.props.children);
    }
    getInitialState() {
        return { tongHocVien: this.props.totalStudents };
    }
    render() {
        return (<div>
            <h1> {this.props.name} - {this.props.unit} </h1>
            <p>{this.props.children}</p>
            <Bien1 />
            <div>So hoc vien: {this.state.totalStudents}</div>
            <button onClick={() => { let str = this.props.name + " " + this.props.unit; getName(str) }}>Lấy thông tin</button>
            <button onClick={this.addStudent}>Them hoc vien</button>
        </div>)
    }
};
// {this.getInformation.bind(this,this.props.children)}
class Bien1 extends React.Component {
    render() {
        return (<div>
            <p className="stylecolor">Đây là bài test</p>
        </div>)
    }
};


ReactDOM.render(
    <div>
        <InputTag/>
        <Bien name="NodeJS" unit="Bài 1" totalStudents = "10">Đây là children</Bien>
        <Bien name="ReactJS" unit="Bài 2" totalStudents = "12">Đây là children</Bien>
        <Bien name="VueJS" unit="Bài 3" totalStudents = "11">Đây là children</Bien>
    </div>
    , document.getElementById("root"));


