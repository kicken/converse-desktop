/* global api */

converse.plugins.add('converse-desktop-settings', {
    initialize() {
        const {_converse} = this;
        api.settings.changed(function (key, newValue) {
            if (['omemo_default'].includes(key) !== -1) {
                _converse.api.settings.set(key, newValue);
            }
            if (['show_self_in_roster'].includes(key) !== -1) {
                _converse.api.settings.set(key, newValue);
                document.querySelector('converse-roster')?.requestUpdate();
            }
        });
    }
});
