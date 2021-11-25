use sea_orm::{Database, DatabaseConnection};


lazy_static! {
    static ref DATABASE_CLIENT: DatabaseConnection = {
        tokio::runtime::Runtime::new().unwrap().block_on(async {
            Database::connect("postgres://lonsqlapius:@localhost/Coordinoted").await.unwrap()
        })
    };
}

