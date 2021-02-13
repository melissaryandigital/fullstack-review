import React from 'react';

const RepoList = (props) => (
  <div>
    <div>
      <h4> Repo List Component </h4>
    There are {props.repos.length} repos.
    <br />
    <br />
  </div>

    <table>
      <tr><td>Repo Name</td><td>GitHub User</td><td>Stargazer Count</td></tr>

      {props.repos.map(repo => {
        return <tr><td><a href={repo.htmlUrl} target="_blank">{repo.repoName}</a></td><td>{repo.username}</td><td>{repo.stargazersCount}</td></tr>
      })
      }

    </table>
  </div>
)


export default RepoList;