import React from 'react'

class SearchBar extends React.Component {
  state = { keyword: '' }

  onInputChange = (e) => {
    this.setState({ keyword: e.target.value })
  }

  onFormSubmit = (e) => {
    e.preventDefault()
    this.props.onSubmit(this.state.keyword)
  }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <div className="ui icon input">
              <input
                onChange={this.onInputChange}
                value={this.state.keyword}
                type="text"
                placeholder="Search..."
              />
              <i class="search icon"></i>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar
