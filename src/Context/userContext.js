import React from "react";

export const AuthContextAPI = React.createContext();

class AuthContextProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lstUser: [],
    };

    this.setState = this.setState.bind(this);
    this.handleUpdade = this.handleUpdade.bind(this);
    this.handleResetData = this.handleResetData.bind(this);
  }

  timeReturn = () => {
      const infor = new Date()
      const time = infor.getHours() + ':' + infor.getMinutes() + ':' + ("0" + infor.getSeconds()).slice(-2)
      return time;  
  }

  handleUpdade = async (user) => {

    const timestamp = Math.round(new Date().getTime() / 1000);

    user.timestamp = timestamp;
    user.time = this.timeReturn()
    user.id = this.state.lstUser.length === undefined ? 1 : this.state.lstUser.length + 1
    
    await this.setState({ lstUser: [...this.state.lstUser, user] });

    localStorage.setItem("data", JSON.stringify(this.state.lstUser).toString())
    return this.state;
  };

  handleResetData = () => {
      localStorage.removeItem('data');
  }

  render() {
    const { lstUser } = this.state;

    return (
      <AuthContextAPI.Provider
        value={{ lstUser, handleUpdade: this.handleUpdade, handleResetData: this.handleResetData }}
      >
        {this.props.children}
      </AuthContextAPI.Provider>
    );
  }
}

export default AuthContextProvider;
