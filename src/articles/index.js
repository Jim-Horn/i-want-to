import cmd from './sections/cmd';
import css from './sections/css';
import docker from './sections/docker';
import filesystem from './sections/filesystem';
import git from './sections/git';
import node from './sections/node';
import webpack from './sections/webpack';
import yarn from './sections/yarn';

export default [].concat(
    cmd,
    css,
    docker,
    filesystem,
    git,
    node,
    webpack,
    yarn
);
