import { useEffect, useState } from 'react';

/**
 * Hook personalizado para detectar e ajustar-se à escala do sistema do usuário
 * Isso é útil para ajustar elementos da UI quando o usuário está com configurações
 * de escala do sistema como 125%, 150%, etc.
 */
export function useWindowScale() {
  const [scale, setScale] = useState(1);
  
  useEffect(() => {
    // Tenta detectar a escala atual do sistema
    const detectScale = () => {
      // Uma maneira de detectar a escala é comparar o devicePixelRatio com a escala da janela
      const deviceScale = window.devicePixelRatio || 1;
      setScale(deviceScale);
    };
    
    detectScale();
    
    // Atualiza quando a janela for redimensionada (embora a escala do sistema
    // geralmente não mude durante uma sessão)
    window.addEventListener('resize', detectScale);
    
    return () => {
      window.removeEventListener('resize', detectScale);
    };
  }, []);
  
  return { scale };
}

/**
 * Função que ajuda a ajustar valores baseados na escala do sistema
 * @param baseValue Valor base para a unidade
 * @param scale Escala atual do sistema
 * @returns Valor ajustado baseado na escala
 */
export function scaleAdjust(baseValue: number, scale: number): number {
  // Um algoritmo simples para ajuste
  // Você pode personalizar isso com base em suas necessidades específicas
  if (scale <= 1) return baseValue;
  
  // Ajusta valores maiores de escala para não crescerem proporcionalmente
  // ex: 125% não deve aumentar tudo em 1.25x
  const adjustFactor = 1 + ((scale - 1) * 0.5);
  return baseValue / adjustFactor;
}
