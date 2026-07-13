/* global api */

await import('./app/converse-plugins/desktop-trayicon.js')
await import('./app/converse-plugins/desktop-settings.js')


const priority = await api.settings.get('priority', 0);
const omemo_default = await api.settings.get('omemo_default', false);
const show_self_in_roster = await api.settings.get('show_self_in_roster', false);
const play_sounds = await api.settings.get('play_sounds', true);
const show_desktop_notifications = await api.settings.get('show_desktop_notifications', true);
const theme = await api.theme.getTheme();
const dark_theme = await api.theme.getDarkTheme();


converse.plugins.add('converse-debug', {
    initialize() {
        const {_converse} = this;
        window._converse = _converse;
    }
});

converse.initialize({
    assets_path: './node_modules/converse.js/dist/',
    notification_icon: './resources/images/logo.svg',
    i18n: navigator.language,
    loglevel: 'warn',
    muc_show_logs_before_join: true,
    omemo_default,
    show_desktop_notifications,
    play_sounds,
    priority,
    show_background: true,
    show_self_in_roster,
    dark_theme,
    theme,
    whitelisted_plugins: ['converse-desktop-trayicon', 'converse-desktop-settings'],
}).catch((reason) => {
    console.log(reason);
    api.app.quit();
});
