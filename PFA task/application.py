from flask import Flask, render_template, request, redirect, session, flash, g, url_for
import mysql.connector
app = Flask(__name__)


# --- Folders ---
def get_db_connection():
    return mysql.connector.connect(
        host='localhost',
        user='root',
        password='badrisprogramming@#2004',
        database='folder'
    )
    
@app.route('/folder/submit',methods = ['POST'])
def submit():
    FolderName = request.form['folder_name'].strip()
    connect = get_db_connection()
    cursor = connect.cursor()
    cursor.execute('select * from folders_names where folder_name like %s',(FolderName,))
    
    if cursor.fetchone():
        cursor.close()
        connect.close()
        return redirect (url_for('folders',alert='true'))
    
    if FolderName == "" :
        cursor.execute("delete from folders_names where folder_name = ''")
        connect.commit()
        cursor.close()
        connect.close()
        return redirect ('/folder')

    else:
        cursor.execute('INSERT INTO folders_names (folder_name) VALUES (%s)', (FolderName,))
        connect.commit()
        cursor.close()
        connect.close()
        return redirect ('/folder')
    
    
@app.route('/folder/submit/delete',methods = ['post'])
def deletefolder():
    Delete = request.form['DeleteButton']
    connect = get_db_connection()
    cursor = connect.cursor()
    cursor.execute("DELETE FROM folders_names WHERE folder_name = %s", (Delete,))
    connect.commit()
    cursor.close()
    connect.close()
    return redirect ('/folder')
    
@app.route('/folder')
def folders():

    alertall = request.args.get('alert')
    connect = get_db_connection()
    cursor = connect.cursor()
    cursor.execute('select * from folders_names')
    all_folders = cursor.fetchall()
    
    return render_template('folder.html', folder=all_folders,alert=alertall)
