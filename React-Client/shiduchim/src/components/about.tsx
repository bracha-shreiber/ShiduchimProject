import React from 'react'
import Header from './header'

const AboutComponent: React.FC = () => {
  return (
    <>
    <Header/>
    <div style={styles.container}>
      <h1 style={styles.title}>אודות האתר</h1>
      <p style={styles.text}>
        אתר זה נועד לסייע לשדכנים ולשדכניות בניהול תהליך השידוכים בצורה חכמה, מסודרת ויעילה.
        תוכלו להעלות קבצי רזומה של מועמדים, לבצע חיפושים לפי קריטריונים, ליצור קשרים, לשתף מידע עם שדכנים אחרים, ולעקוב אחרי סטטוס ההצעות שלכם.
      </p>
      <p style={styles.text}>
        האתר תוכנן במיוחד לצורכי קהילת השידוכים, עם ממשק פשוט ונוח, תוך שמירה על פרטיות המידע והקפדה על כללי צניעות והתאמה אישית.
      </p>
      <p style={styles.text}>
        אנו מזמינים אתכם להשתמש בכלי החכם הזה כדי לייעל את העבודה ולהגביר את הסיכוי להצלחות!
      </p>
    </div>
    </>
  )
}

const styles = {
  container: {
    maxWidth: '80%',
    margin: 'auto',
    padding: '10rem',
    direction: 'rtl',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  } as React.CSSProperties,
  title: {
    fontSize: '2rem',
    color: '#d32f2f',
    marginBottom: '1rem',
  },
  text: {
    fontSize: '1.1rem',
    lineHeight: '1.8',
    color: '#333',
    marginBottom: '1rem',
  },
}

export default AboutComponent
