'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface AuditFormData {
  nom: string;
  prenom: string;
  entreprise: string;
  secteur: string;
  caMensuel: string;
  tauxCommission?: string;
  email: string;
  telephone: string;
  ville: string;
  message?: string;
  rgpd: boolean;
}

export default function AuditForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<AuditFormData>();

  const onSubmit = async (data: AuditFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/audit-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        reset();
      } else {
        alert('Une erreur est survenue. Veuillez réessayer ou nous contacter directement.');
      }
    } catch (error) {
      alert('Une erreur est survenue. Veuillez réessayer ou nous contacter directement.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="border border-slate-200 p-12 text-center">
        <div className="text-slate-900 text-4xl mb-6">✓</div>
        <h3 className="text-xl font-normal text-slate-900 mb-4">Merci pour votre demande</h3>
        <p className="text-slate-600 font-light">
          Nous vous recontactons sous 24 heures pour discuter de votre situation.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="prenom" className="block text-sm font-medium text-slate-700 mb-2">
            Prénom <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="prenom"
            {...register('prenom', { required: 'Ce champ est obligatoire' })}
                className="w-full px-4 py-3 border border-slate-300 rounded-sm focus:outline-none focus:border-slate-900 transition-colors"
          />
          {errors.prenom && (
            <p className="mt-1 text-sm text-red-600">{errors.prenom.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="nom" className="block text-sm font-medium text-slate-700 mb-2">
            Nom <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="nom"
            {...register('nom', { required: 'Ce champ est obligatoire' })}
                className="w-full px-4 py-3 border border-slate-300 rounded-sm focus:outline-none focus:border-slate-900 transition-colors"
          />
          {errors.nom && (
            <p className="mt-1 text-sm text-red-600">{errors.nom.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="entreprise" className="block text-sm font-medium text-slate-700 mb-2">
          Nom de l'entreprise <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="entreprise"
          {...register('entreprise', { required: 'Ce champ est obligatoire' })}
                className="w-full px-4 py-3 border border-slate-300 rounded-sm focus:outline-none focus:border-slate-900 transition-colors"
        />
        {errors.entreprise && (
          <p className="mt-1 text-sm text-red-600">{errors.entreprise.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="secteur" className="block text-sm font-medium text-slate-700 mb-2">
          Secteur d'activité <span className="text-red-500">*</span>
        </label>
        <select
          id="secteur"
          {...register('secteur', { required: 'Ce champ est obligatoire' })}
                className="w-full px-4 py-3 border border-slate-300 rounded-sm focus:outline-none focus:border-slate-900 transition-colors"
        >
          <option value="">Sélectionnez un secteur</option>
          <option value="commerce">Commerce</option>
          <option value="restauration">Restauration</option>
          <option value="pharmacie">Pharmacie</option>
          <option value="services">Services</option>
          <option value="autre">Autre</option>
        </select>
        {errors.secteur && (
          <p className="mt-1 text-sm text-red-600">{errors.secteur.message}</p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="caMensuel" className="block text-sm font-medium text-slate-700 mb-2">
            CA mensuel estimé encaissé par carte (€) <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            id="caMensuel"
            {...register('caMensuel', { required: 'Ce champ est obligatoire' })}
                className="w-full px-4 py-3 border border-slate-300 rounded-sm focus:outline-none focus:border-slate-900 transition-colors"
            placeholder="35000"
          />
          {errors.caMensuel && (
            <p className="mt-1 text-sm text-red-600">{errors.caMensuel.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="tauxCommission" className="block text-sm font-medium text-slate-700 mb-2">
            Taux de commission estimé (%) <span className="text-slate-400">(facultatif)</span>
          </label>
          <input
            type="number"
            id="tauxCommission"
            step="0.01"
            {...register('tauxCommission')}
                className="w-full px-4 py-3 border border-slate-300 rounded-sm focus:outline-none focus:border-slate-900 transition-colors"
            placeholder="1.2"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
            E-mail <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            {...register('email', {
              required: 'Ce champ est obligatoire',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Adresse e-mail invalide',
              },
            })}
                className="w-full px-4 py-3 border border-slate-300 rounded-sm focus:outline-none focus:border-slate-900 transition-colors"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="telephone" className="block text-sm font-medium text-slate-700 mb-2">
            Téléphone <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="telephone"
            {...register('telephone', { required: 'Ce champ est obligatoire' })}
                className="w-full px-4 py-3 border border-slate-300 rounded-sm focus:outline-none focus:border-slate-900 transition-colors"
          />
          {errors.telephone && (
            <p className="mt-1 text-sm text-red-600">{errors.telephone.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="ville" className="block text-sm font-medium text-slate-700 mb-2">
          Ville / Région <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="ville"
          {...register('ville', { required: 'Ce champ est obligatoire' })}
                className="w-full px-4 py-3 border border-slate-300 rounded-sm focus:outline-none focus:border-slate-900 transition-colors"
        />
        {errors.ville && (
          <p className="mt-1 text-sm text-red-600">{errors.ville.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
          Message / Précisions <span className="text-slate-400">(optionnel)</span>
        </label>
        <textarea
          id="message"
          rows={4}
          {...register('message')}
                className="w-full px-4 py-3 border border-slate-300 rounded-sm focus:outline-none focus:border-slate-900 transition-colors"
        />
      </div>

      <div className="flex items-start">
        <input
          type="checkbox"
          id="rgpd"
          {...register('rgpd', {
            required: 'Vous devez accepter l\'utilisation de vos données',
          })}
          className="mt-1 mr-2"
        />
        <label htmlFor="rgpd" className="text-sm text-slate-700">
          J'accepte que mes données soient utilisées pour être recontacté(e) dans le cadre de cet audit. <span className="text-red-500">*</span>
        </label>
      </div>
      {errors.rgpd && (
        <p className="text-sm text-red-600">{errors.rgpd.message}</p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-8 py-3 bg-[#2563eb] text-white font-normal rounded-sm hover:bg-[#1d4ed8] transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-base"
      >
        {isSubmitting ? 'Envoi en cours...' : 'Demander un audit gratuit'}
      </button>
    </form>
  );
}

