var Header = React.createClass({
  propTypes: {
    isLoggedIn: React.PropTypes.bool.isRequired,
    user: React.PropTypes.Object
  },

  getInitialState: function() {
    return {
      isLoggedIn: this.props.isLoggedIn,
      showMenu: false,
    };
  },

  renderBeforeLogin: function() {
    return (
      <ul className="m-header-menu">
        <li className="m-header-menu-item"><a href='/signup'>Sign up</a></li>
        <li className="m-header-menu-item"><a href='/login'>Log in</a></li>
      </ul>
    );
  },

  handleClickSettings: function() {
    this.setState({
      showMenu: !this.state.showMenu,
    });
  },

  handleMouseLeaveFromSettings: function() {
    this.setState({
      showMenu: false,
    });
  },

  renderAfterLogin: function() {
    return (
      <ul className="m-header-menu">
        <li className="m-header-menu-item" onMouseLeave={ this.handleMouseLeaveFromSettings }>
          <a onClick={ this.handleClickSettings }>Settings</a>
          <ul className={ this.state.showMenu ? '' : 'hidden' }>
            <li><a href={'/users/' + this.props.user.id + '/edit'}>Edit</a></li>
            <li><a href={'/users/' + this.props.user.id}>Profile</a></li>
            <li><a rel="nofollow" data-method="delete" href="/logout">Log out</a></li>
          </ul>
        </li>
        <li className="m-header-menu-item"><a href='/users/'>Users</a></li>
      </ul>
    );
  },

  render: function() {
    var component;
    if (this.state.isLoggedIn) {
      component = this.renderAfterLogin();
    } else {
      component = this.renderBeforeLogin();
    }
    return (
      <div className="m-header-nav-inner">
        {component}
      </div>
    );
  },
});
