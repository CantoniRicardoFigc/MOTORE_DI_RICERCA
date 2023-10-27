from flask import Flask, request, render_template
import sqlite3

app = Flask(__name__)

# Funzione per creare la tabella SQLite
def create_table():
    conn = sqlite3.connect('mydatabase.db')
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS users (
            nome varchar(20) PRIMARY KEY,
            username varchar(20) NOT NULL,
            email varchar(50) NOT NULL
        )
    ''')
    conn.commit()
    conn.close()

# Creare la tabella al lancio dell'app
create_table()

@app.route('/')
def home():
    return 'Benvenuti nell\'applicazione Flask con SQLite!'

if __name__ == '__main__':
    app.run()