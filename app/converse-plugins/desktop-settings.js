/* global api */

converse.plugins.add('converse-desktop-settings', {
    initialize () {
        const { _converse } = this;
        api.settings.changed(function (key, newValue) {
            if (['omemo_default', 'play_sounds', 'show_desktop_notifications'].includes(key)) {
                _converse.api.settings.set(key, newValue);
            }
        });
    }
});
