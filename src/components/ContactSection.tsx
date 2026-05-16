import { useState } from 'react';
import { motion } from 'motion/react';
import { Send, User, Mail, Phone, MessageSquare } from 'lucide-react';
import TypewriterTitle from './TypewriterTitle';

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

    const isFormValid = formData.name.trim() !== '' && 
                       (formData.email.trim() !== '' || formData.mobile.trim() !== '') &&
                       formData.message.trim() !== '';

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!isFormValid) return;

        setStatus('submitting');
        
        try {
            const payload = {
                name: formData.name,
                phone: formData.mobile,
                email: formData.email,
                message: formData.message
            };

            // Using 'text/plain' with 'no-cors' is the most reliable way to send 
            // JSON to a Google Script without triggering CORS preflight errors.
            await fetch('https://script.google.com/macros/s/AKfycbxe6b6UNA3zLiYRPQB4nEdPhFzGc3UZjGUIUzhTDMiP8rzFyByB71aWiU8in3WQoAfY/exec', {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'text/plain',
                },
                body: JSON.stringify(payload)
            });

            setStatus('success');
            setFormData({ name: '', email: '', mobile: '', message: '' });
            setTimeout(() => setStatus('idle'), 3000);
        } catch (error) {
            console.error('Error sending message:', error);
            setStatus('idle');
        }
    };

    return (
        <section id="contact" className="py-24 px-6 bg-[#0B0F1A] border-t border-white/5 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] -z-10 rounded-full translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] -z-10 rounded-full -translate-x-1/2 translate-y-1/2" />

            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                {/* Content Side */}
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold uppercase tracking-widest w-fit">
                            Ready to build?
                        </div>
                        <TypewriterTitle
                            text="Let's bring your vision to life."
                            className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-[1.1]"
                        />
                        <p className="text-gray-400 text-lg max-w-lg leading-relaxed">
                            Whether you have a specific project in mind or just want to explore the possibilities, our team is ready to help you scale.
                        </p>
                    </div>

                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-4 text-gray-300">
                            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
                                <Mail className="w-5 h-5 text-blue-500" />
                            </div>
                            <div>
                                <p className="text-xs font-bold uppercase tracking-widest text-gray-500">Email Us</p>
                                <p className="text-lg font-medium">hello@boltblazers.com</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 text-gray-300">
                            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
                                <Phone className="w-5 h-5 text-blue-500" />
                            </div>
                            <div>
                                <p className="text-xs font-bold uppercase tracking-widest text-gray-500">Call Us</p>
                                <p className="text-lg font-medium">+91 95285 23430</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Form Side */}
                <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-[#161B26] p-8 md:p-10 rounded-3xl border border-white/5 shadow-2xl relative"
                >
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                        <div className="grid md:grid-cols-1 gap-6">
                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Full Name</label>
                                <div className="relative">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                                    <input 
                                        type="text"
                                        required
                                        placeholder="John Doe"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-blue-500/50 transition-colors"
                                        value={formData.name}
                                        onChange={e => setFormData({...formData, name: e.target.value})}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Email Address</label>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                                    <input 
                                        type="email"
                                        placeholder="john@example.com"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-blue-500/50 transition-colors"
                                        value={formData.email}
                                        onChange={e => setFormData({...formData, email: e.target.value})}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Mobile Number</label>
                                <div className="relative">
                                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                                    <input 
                                        type="tel"
                                        placeholder="+91 00000 00000"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-blue-500/50 transition-colors"
                                        value={formData.mobile}
                                        onChange={e => setFormData({...formData, mobile: e.target.value})}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">How can we help?</label>
                            <div className="relative">
                                <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-gray-500" />
                                <textarea 
                                    required
                                    rows={4}
                                    placeholder="Tell us about your project..."
                                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-blue-500/50 transition-colors resize-none"
                                    value={formData.message}
                                    onChange={e => setFormData({...formData, message: e.target.value})}
                                />
                            </div>
                        </div>

                        <p className="text-[10px] text-gray-500 italic px-1">
                            * Either Email or Mobile number is mandatory so we can get back to you.
                        </p>

                        <button
                            type="submit"
                            disabled={!isFormValid || status === 'submitting'}
                            className={`w-full py-5 rounded-xl font-bold uppercase tracking-widest text-sm transition-all flex items-center justify-center gap-2 ${
                                status === 'success' 
                                ? 'bg-green-600 text-white' 
                                : 'bg-blue-600 hover:bg-blue-700 text-white shadow-xl shadow-blue-600/20 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed'
                            }`}
                        >
                            {status === 'idle' && (
                                <>
                                    Send Message
                                    <Send className="w-4 h-4" />
                                </>
                            )}
                            {status === 'submitting' && 'Sending...'}
                            {status === 'success' && 'Message Sent Successfully!'}
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
