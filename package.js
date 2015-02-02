Package.describe({
    summary: "Bootstrap 3 DateTime picker from @Eonasdan, packaged for Meteor.js",
    version: "3.1.3_3",
    git: "https://github.com/tsega/meteor-bootstrap3-datetimepicker.git"
});

Package.on_use(function (api, where) {
    api.versionsFrom('METEOR@0.9.0');

    api.use('jquery', 'client');
    api.use('momentjs:moment@2.9.0');

    api.add_files([
      'lib/css/bootstrap3-datetimepicker.css', // Add Date Time Picker CSS and JS files
      'lib/js/bootstrap3-datetimepicker.js',
    ], 'client');
});
