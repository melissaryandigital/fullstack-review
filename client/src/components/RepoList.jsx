import React from 'react';

const RepoList = (props) => (
  <div>
    <div>
      <h4> Repo List Component </h4>
    There are {props.repos.length} repos.
  </div>

    <ul>

      {console.log('repo1', props.repos[0])}

      { props.repos.map(repo => {
          return <li><a href={repo.htmlUrl} target="_blank">{repo.repoName}</a></li>
        })
      }

    </ul>
  </div>
)

export default RepoList;