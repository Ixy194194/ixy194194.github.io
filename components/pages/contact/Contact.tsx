import { FC, useEffect, useState } from 'react';
import styles from './Contact.module.scss';
import router from 'next/router';

const ContactComponent: FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    document.body.classList.add('fixedLogo');
    // Turnstileウィジェットの初期化
    const script = document.createElement('script');
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    script.onload = () => {
      if ((window as any).turnstile) {
        (window as any).turnstile.render('#turnstile-container', {
          sitekey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY,
          callback: function(token: string) {
            const element = document.getElementById('cf-turnstile-response');
            if (element instanceof HTMLInputElement) {
              element.value = token;
            }
          },
        });
      }
    };

    return () => {
      document.body.removeChild(script);
      document.body.classList.remove('fixedLogo');
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const formData = new FormData(e.currentTarget);
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
        if (result.errors && Array.isArray(result.errors)) {
          const errorMessages = result.errors.map((error: any) => error.message);
          setErrorMessage(errorMessages.join(', '));
        } else {
          setErrorMessage(result.message || '送信に失敗しました。確認して再度お試しください。');
        }
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('ネットワークエラーが発生しました。再度お試しください。');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={styles.contact}>
      <div className={styles.contactContainer}>
        <h2><span>Contact</span></h2>
        <p>お仕事のご依頼は下記のフォームよりお問い合わせください。</p>

        <div className={styles.contactForm}>
          {submitStatus !== 'success' ? (
            <form onSubmit={handleSubmit}>
              <div className={styles.formItem}>
                <label className={styles.formItemLabel} htmlFor="name">お名前<span>✳︎</span></label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={styles.formItemInput}
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.formItem}>
                <label className={styles.formItemLabel} htmlFor="email">メールアドレス<span>✳︎</span></label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={styles.formItemInput}
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.formItem}>
                <p className={styles.formItemLabel}>件名</p>
                <input
                  type="text"
                  name="subject"
                  className={styles.formItemInput}
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.formItem}>
                <p className={styles.formItemLabel}>お問い合わせ内容<span>✳︎</span></p>
                <textarea
                  name="message"
                  className={styles.formItemTextarea}
                  required
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div id="turnstile-container"></div>
              <input type="hidden" id="cf-turnstile-response" name="cf-turnstile-response" />
              
              <input
                type="submit"
                className={styles.button}
                disabled={isSubmitting}
                value={isSubmitting ? '送信中...' : '送信する'}
              />
            </form>
          ) : (
            <>
              <div className={styles.successMessage}>
                ありがとうございます。メッセージは送信されました！
              </div>

              <button className={styles.button} onClick={() => router.push('/')}>ホームに戻る</button>
            </>
          )}
          {submitStatus === 'error' && errorMessage && (
            <div className={styles.errorMessage}>
              {errorMessage}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactComponent;
