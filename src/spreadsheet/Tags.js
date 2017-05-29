import React, { Component } from 'react'

class Tags extends Component {
  render() {
    const { sheet } = this.props.store
    const tags = sheet.tag_names || []
    return(
      <div className="side-bar__group">
        <h3 className="content__heading">tags</h3>
        <div className="tags">
          {
            tags.map((tag, idx) => {
              return (<div className="tag" key={idx}>{tag}</div>)
            })
          }
        </div>
      </div>
    )
  }
}

export default Tags
