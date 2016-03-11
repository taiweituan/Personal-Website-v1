var app = angular.module('MainApp', []);

app.controller('MainController', ['$scope', function ($scope) {
    $scope.test = 'hello angular';
    var gridDataJSON = [{ "Type": "Folder", "Name": "Sub Folder", "Description": "Sub Folder Description", "ModifiedDate": "1/21/2014 2:56 PM", },
                        { "Type": "Folder", "Name": "Test 2", "Description": "", "ModifiedDate": "1/21/2014 2:54 PM" },
                        { "Type": "Folder", "Name": "Test", "Description": "", "ModifiedDate": "1/21/2014 2:53 PM" },
                        { "Type": "Folder", "Name": "New Folder", "Description": "", "ModifiedDate": "1/21/2014 2:53 PM" },
                        { "Type": "Document", "Name": "Send Documents Usability.docx", "Description": "Document Description", "ModifiedDate": "1/21/2014 3:55 PM" },
                        { "Type": "Document", "Name": "Star Image.png", "Description": "", "ModifiedDate": "1/21/2014 3:45 PM" },
                        { "Type": "Document", "Name": "Coming Soon Text for Login Page.docx", "Description": "", "ModifiedDate": "1/21/2014 3:15 PM" },
                        { "Type": "Document", "Name": "Internationalization_Notes.pdf", "Description": "", "ModifiedDate": "1/21/2014 2:58 PM" },
                        { "Type": "Document", "Name": "Test Document.docx", "Description": "This is a test document", "ModifiedDate": "1/21/2014 2:55 PM" },
                        { "Type": "Document", "Name": "Spreadsheet.xlsx", "Description": "", "ModifiedDate": "1/21/2014 2:35 PM" },
                        { "Type": "Document", "Name": "Moon Image.png", "Description": "", "ModifiedDate": "1/21/2014 2:27 PM" },
                        { "Type": "Document", "Name": "Presentation Deck.ppt", "Description": "", "ModifiedDate": "1/21/2014 1:37 PM" }];
    var ActionButtonJSON = [{ "Name": "Upload", "ImageName": "upload" },
                            { "Name": "Create Folder", "ImageName": "create_folder" },
                            { "Name": "Share", "ImageName": "share" },
                            { "Name": "Cut", "ImageName": "cut" },
                            { "Name": "Manage Attributes", "ImageName": "tag" },
                            { "Name": "Copy", "ImageName": "copy" },
                            { "Name": "Paste", "ImageName": "paste" },
                            { "Name": "Search", "ImageName": "search" },
                            { "Name": "Folder Settings", "ImageName": "folder_settings" },
                            { "Name": "Send Email", "ImageName": "send_email" },
    ];
    $scope.gridDataJSON = gridDataJSON;
    $scope.gridDataLength = gridDataJSON.length;

    // Look for data type
    // Return the file extension.
    $scope.getExtension = function (data) {
        var extension = data.Name.split(".");
        if (extension.length === 1) {
            return data.Type;
        } else {
            return extension[extension.length - 1];
        }
    };

    // a work-around to make icons on sidebar to list vertically top to bottom
    if (ActionButtonJSON.length % 4 != 0) {
        var numDataToPush = 4 - (ActionButtonJSON.length % 4);
        for (var i = 0; i < numDataToPush; i++) {
            ActionButtonJSON.push({ "Name": "empty", "ImageName": "" });
        }
    }
    var numColumnActionButton = ActionButtonJSON.length / 4;
    var actionButtonAry = [];
    for (var i = 0; i < numColumnActionButton; i++) {
        actionButtonAry.push(ActionButtonJSON.slice(i * 4, i * 4 + 4));
    }
    $scope.actionButtonAry = actionButtonAry;

    // expand/shrink the sidebar
    $scope.sidebarExpand = false;
    $scope.toggleSidebar = function () {
        $scope.sidebarExpand = !$scope.sidebarExpand;
    };

    // table sorting
    $scope.sortType = '';
    $scope.sortReverse = false;
    $scope.sortTable = function (name) {
        if (name === $scope.sortType) {
            $scope.sortReverse = !$scope.sortReverse;
        } else if (name === 'Item') {
            console.log('hOI!!');
        } else {
            $scope.sortType = name;
            $scope.sortReverse = false;
        }
    };
}]);