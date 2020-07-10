app.controller("HomeCtrl", function ($scope, $window) {
  $scope.columns = [];
  $scope.col_type = "";
  $scope.col_null = "null";
  $scope.col_length = null;
  $scope.data_types = [
    "foreignId",
    "bigIncrements",
    "bigInteger",
    "binary",
    "boolean",
    "char",
    "date",
    "dateTime",
    "dateTimeTz",
    "decimal",
    "double",
    "enum",
    "float",
    "geometry",
    "geometryCollection",
    "increments",
    "integer",
    "ipAddress",
    "json",
    "jsonb",
    "lineString",
    "longText",
    "macAddress",
    "mediumIncrements",
    "mediumInteger",
    "mediumText",
    "morphs",
    "uuidMorphs",
    "multiLineString",
    "multiPoint",
    "multiPolygon",
    "nullableMorphs",
    "nullableUuidMorphs",
    "nullableTimestamps",
    "point",
    "polygon",
    "rememberToken",
    "set",
    "smallIncrements",
    "smallInteger",
    "softDeletes",
    "softDeletesTz",
    "string",
    "text",
    "time",
    "timeTz",
    "timestamp",
    "timestampTz",
    "timestamps",
    "timestampsTz",
    "tinyIncrements",
    "tinyInteger",
    "unsignedBigInteger",
    "unsignedDecimal",
    "unsignedInteger",
    "unsignedMediumInteger",
    "unsignedSmallInteger",
    "unsignedTinyInteger",
    "uuid",
    "year",
  ];

  $scope.add_column = function () {
    //Add the new item to the Array.

    if ($scope.col_name == null || $scope.col_name == undefined) {
      alert("Col name is empty");
    } else if (
      $scope.col_type == null ||
      $scope.col_type == undefined ||
      $scope.col_type == ""
    ) {
      alert("Col type is empty");
    } else {
      var column = {};
      column.col_name = $scope.col_name;
      column.col_type = $scope.col_type;
      column.col_null = $scope.col_null;
      column.col_length = $scope.col_length;

      $scope.columns.push(column);

      //Clear the TextBoxes.
      $scope.col_name = "";
      $scope.col_type = "";
      $scope.col_null = "null";
      $scope.col_length = null;
      $scope.updateMigration();
    }
  };

  $scope.Remove = function (index) {
    var name = $scope.columns[index].col_name;
    if ($window.confirm("Do you want to delete: " + name)) {
      $scope.columns.splice(index, 1);
      $scope.updateMigration();
    }
  };

  $scope.edit_value = function (index, val, col) {
    if (col == "name") {
      $scope.columns[index].col_name = val;
    } else if (col == "type") {
      $scope.columns[index].col_type = val;
    } else if (col == "null") {
      $scope.columns[index].col_null = val;
    } else if (col == "length") {
      $scope.columns[index].col_length = val;
    }
    $scope.updateMigration();
  };

  $scope.updateMigration = function () {
    var index = 0;
    $scope.columns.forEach(function (e) {
      var length = "";
      if (e.col_length != null) {
        length += "," + e.col_length;
      }

      var migration =
        "$table->" + e.col_type + "('" + e.col_name + "'" + length + ")";
      if (e.col_null == "null") {
        migration += "->nullable()";
      }
      migration += ";";

      $scope.columns[index].migration = migration;
      index++;
    });
  };
});
