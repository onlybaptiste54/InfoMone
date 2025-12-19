'use client';

import { useState } from 'react';

export default function SimplifiedSimulator() {
  const [caMensuel, setCaMensuel] = useState<string>('');
  const [showInfo, setShowInfo] = useState(false);
  const [resultats, setResultats] = useState<{
    tauxMoyen: number;
    commissionsEstimees: number;
    commissionsOptimales: number;
    status: 'ok' | 'warning' | 'urgent';
  } | null>(null);

  const calculerEstimation = () => {
    const ca = parseFloat(caMensuel) || 0;

    if (ca <= 0) {
      alert('Veuillez entrer votre chiffre d\'affaires mensuel.');
      return;
    }

    // Taux moyen paramétré en fonction du CA
    let tauxMoyen: number;
    if (ca > 100000) {
      tauxMoyen = 0.30; // 0.30% pour CA > 100K
    } else if (ca > 50000) {
      tauxMoyen = 0.50; // 0.50% pour CA entre 50K et 100K
    } else if (ca > 20000) {
      tauxMoyen = 0.70; // 0.70% pour CA entre 20K et 50K
    } else {
      tauxMoyen = 1.00; // 1.00% pour CA < 20K
    }

    const commissionsOptimales = (ca * tauxMoyen) / 100;
    
    // Estimation des commissions actuelles (on suppose qu'ils paient plus)
    const tauxActuelEstime = tauxMoyen * 2.5; // On estime qu'ils paient 2.5x plus
    const commissionsEstimees = (ca * tauxActuelEstime) / 100;

    // Déterminer le statut avec code couleur
    let status: 'ok' | 'warning' | 'urgent';
    const ratio = tauxActuelEstime / tauxMoyen;
    
    if (ratio <= 1.3) {
      status = 'ok'; // Vert - Taux correct
    } else if (ratio <= 2) {
      status = 'warning'; // Orange - Négociation possible
    } else {
      status = 'urgent'; // Rouge - Action immédiate
    }

    setResultats({
      tauxMoyen,
      commissionsEstimees,
      commissionsOptimales,
      status,
    });
  };

  const scrollToCalendly = () => {
    window.open('https://calendly.com/infomone-consulting/reservation-d-appel', '_blank');
  };

  const getStatusColor = (status: 'ok' | 'warning' | 'urgent') => {
    switch (status) {
      case 'ok':
        return 'bg-green-50 border-green-200';
      case 'warning':
        return 'bg-orange-50 border-orange-200';
      case 'urgent':
        return 'bg-red-50 border-red-200';
    }
  };

  const getStatusText = (status: 'ok' | 'warning' | 'urgent') => {
    switch (status) {
      case 'ok':
        return { text: 'Vos taux semblent corrects', color: 'text-green-800' };
      case 'warning':
        return { text: 'Une négociation est possible', color: 'text-orange-800' };
      case 'urgent':
        return { text: 'Action immédiate recommandée', color: 'text-red-800' };
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-normal text-slate-900 mb-6 tracking-tight">
          Estimez vos commissions CB en 30 secondes
        </h2>
        <p className="text-base text-slate-600 font-light">
          Pas de friction, entrez simplement votre chiffre d'affaires mensuel
        </p>
      </div>

      <div className="bg-slate-50 p-8 sm:p-12 border border-slate-200">
        <div className="mb-8">
          <label htmlFor="ca-mensuel" className="block text-lg font-medium text-slate-700 mb-4">
            Quel est votre CA mensuel encaissé par carte bancaire ?
          </label>
          <div className="relative">
            <input
              type="number"
              id="ca-mensuel"
              value={caMensuel}
              onChange={(e) => setCaMensuel(e.target.value)}
              className="w-full px-6 py-4 text-lg border-2 border-slate-300 rounded-sm focus:outline-none focus:border-[#2563eb] transition-colors"
              placeholder="Ex: 50000"
            />
            <span className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-500 text-lg">€</span>
          </div>
        </div>

        <button
          onClick={calculerEstimation}
          className="w-full px-8 py-4 bg-[#2563eb] text-white font-normal rounded-sm hover:bg-[#1d4ed8] transition-colors text-lg mb-6"
        >
          Voir mon estimation
        </button>

        {/* Toggle Info pratique */}
        <div className="border-t border-slate-300 pt-6">
          <button
            onClick={() => setShowInfo(!showInfo)}
            className="flex items-center justify-between w-full text-left text-sm text-slate-600 hover:text-slate-900 transition-colors"
          >
            <span className="font-medium">📋 Où trouver mon RAFEC ?</span>
            <svg
              className={`w-5 h-5 transition-transform ${showInfo ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {showInfo && (
            <div className="mt-4 p-4 bg-white border border-slate-200 rounded-sm text-sm text-slate-600 leading-relaxed">
              <p className="font-medium text-slate-900 mb-2">RAFEC = Relevé d'Activité et Frais d'Encaissement Carte</p>
              <p className="mb-2">
                📍 <strong>Où le trouver :</strong> Dans l'espace client de votre banque, section "Documents" ou "Monétique"
              </p>
              <p className="mb-2">
                📅 <strong>Fréquence :</strong> Document mensuel récapitulant toutes vos commissions CB
              </p>
              <p>
                💡 <strong>Processus simple :</strong> Téléchargez-le et envoyez-le lors de votre audit gratuit
              </p>
            </div>
          )}
        </div>

        {resultats && (
          <div className={`mt-8 p-8 border-2 ${getStatusColor(resultats.status)} rounded-sm`}>
            <div className="flex items-center justify-between mb-6">
              <h3 className={`text-xl font-medium ${getStatusText(resultats.status).color}`}>
                {getStatusText(resultats.status).text}
              </h3>
              {resultats.status === 'ok' && <span className="text-3xl">✅</span>}
              {resultats.status === 'warning' && <span className="text-3xl">⚠️</span>}
              {resultats.status === 'urgent' && <span className="text-3xl">🚨</span>}
            </div>

            <div className="space-y-4 mb-6">
              <div className="bg-white p-4 rounded-sm border border-slate-200">
                <p className="text-sm text-slate-500 mb-1">Taux moyen recommandé pour votre CA</p>
                <p className="text-2xl font-normal text-slate-900">{resultats.tauxMoyen.toFixed(2)}%</p>
              </div>

              <div className="bg-white p-4 rounded-sm border border-slate-200">
                <p className="text-sm text-slate-500 mb-1">Ce que vous devriez payer (optimal)</p>
                <p className="text-2xl font-normal text-slate-900">
                  {Math.round(resultats.commissionsOptimales).toLocaleString('fr-FR')} € / mois
                </p>
              </div>

              {resultats.status !== 'ok' && (
                <div className="bg-white p-4 rounded-sm border border-slate-200">
                  <p className="text-sm text-slate-500 mb-1">Économies potentielles par an</p>
                  <p className="text-2xl font-normal text-green-600">
                    {Math.round((resultats.commissionsEstimees - resultats.commissionsOptimales) * 12).toLocaleString('fr-FR')} €
                  </p>
                </div>
              )}
            </div>

            {resultats.status === 'warning' || resultats.status === 'urgent' ? (
              <button
                onClick={scrollToCalendly}
                className="w-full px-8 py-4 bg-[#2563eb] text-white font-normal rounded-sm hover:bg-[#1d4ed8] transition-colors text-base"
              >
                🗓️ Réserver mon appel gratuit de 30 minutes
              </button>
            ) : (
              <div className="text-center">
                <p className="text-sm text-slate-600 mb-3">
                  Vous souhaitez quand même optimiser vos frais ?
                </p>
                <button
                  onClick={scrollToCalendly}
                  className="inline-block px-6 py-3 bg-[#2563eb] text-white font-normal rounded-sm hover:bg-[#1d4ed8] transition-colors text-sm"
                >
                  Prendre rendez-vous
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}


