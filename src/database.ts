import { Pool } from 'pg';

// Substitua pela sua string de conexão do Render.com
const connectionString = 'postgresql://n_kj51_user:Ox9OAhSxJmyfwDxL8r32i7bxXCg5oDS2@dpg-cr7qs4d6l47c73bq6asg-a.oregon-postgres.render.com/n_kj51';

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false, // Permite conexões SSL não autorizadas
  }
});

export default pool;