import { sort } from '../../utilities';

export default sort(
    [
        { section: 'git', friendlyName: 'Git' },
        { section: 'docker', friendlyName: 'Docker' },
        { section: 'webpack', friendlyName: 'Webpack' },
        { section: 'yarn', friendlyName: 'Yarn' },
        { section: 'css', friendlyName: 'CSS' },
        { section: 'cmd', friendlyName: 'cmd' },
        { section: 'filesystem', friendlyName: 'File system' },
        { section: 'node', friendlyName: 'Node' },
    ],
    'section'
);
