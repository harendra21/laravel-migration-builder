# Laravel migration builder

DEMO - https://tender-stonebraker-c1254e.netlify.app/

Laravel migration - https://laravel.com/docs/7.x/migrations

## How to install 
  1. Clone this repo using `git clone https://github.com/harendra21/laravel-migration-builder.git` or download https://github.com/harendra21/laravel-migration-builder/archive/master.zip.
  2. Extract if download.
  3. Install any http server, I preffered lite-server to install it globally run `npm install -g lite-server`.
  4. Then run `lite-server`
  5. It will launch your project at http://localhost:3000
  6. Done !
  
## How to use it
  It is very easy to use this app, you just need to enter 
  1. Column name of the table.
  2. Select type of the column
  3. Provide length of column [ https://laravel.com/docs/7.x/migrations#creating-columns ]
  4. Select column is null or not 
  5. Repeat step 1 - 4 for every column in your table
  6. Copy and paste the generated code under `public function up` function of you migration.
    
    public function up(){
      Schema::create('table_name', function (Blueprint $table) {
          // paste here
    });
    
### Future scope
  1. Add modifires and values
  2. Make it more easier to use.
  
  #### Note
 Please suggest for changes or you can create an issue if it is not working fine.
 
 Thank you ...
