import { TermsProps } from "./Terms.type";
import { motion } from "framer-motion";

const Terms: React.FC<TermsProps> = ({ setViewModal, viewModal }) => {
  return (
    <motion.div
      initial={{ y: "100%", opacity: 0 }}
      animate={{
        y: viewModal ? "0%" : "100%",
        opacity: viewModal ? 1 : 0,
      }}
      transition={{ duration: 0.5 }}
      className={`fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50`}
    >
      <div>
        <div
          className={`w-full bg-white p-4 rounded-t-lg max-w-[600px] max-h-[800px] overflow-y-scroll `}
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
        >
          <div className="sticky top-8 md:top-4 flex justify-end bg-transparent">
            <button
              onClick={() => setViewModal(false)}
              className="w-7 h-7 rounded-full bg-[#6da936]/70 z-20 text-white transition-all hover:bg-[#318134] hover:delay-100"
            >
              X
            </button>
          </div>

          <div className="max-h-screen">
            <h2 className="text-xl md:text-2xl font-bold pb-2">
              Políticas de Privacidad de Firstmed
            </h2>
            <p className="text-xs md:text-sm">
              La presente política de privacidad de Datos Personales tiene por
              finalidad informarle la manera en que FIRSTMED PHARMA PERU S.A.C
              con R.U.C. N°20552906366, con domicilio en Av. Angamos Nro. 2541
              Res. San Borja Lima realiza el tratamiento de los Datos Personales
              que recopila de sus usuarios a través de cuestionarios y
              consentimientos escritos u otorgados mediante el llenado de
              formularios electrónicos que se encuentran en el sitio web
              www.firstmed.com.pe (en adelante, denominado sitio web), la
              aplicación móvil Firstmed (en adelante denominada “app”) y en
              anuncios en redes sociales (en adelante, “Pautas Digitales”). Para
              efectos de esta Política de Privacidad toda referencia a
              “nosotros” se entiende a Firstmed y cuando se refiera al “Usuario”
              se entiende a todas aquellas personas que naveguen, utilicen y/o
              realicen compras a través del Sitio Web Firstmed y/o a través del
              Call Center. En Firstmed aseguramos la máxima seguridad y
              protección de los Datos Personales de titularidad de nuestros
              Usuarios. Le agradecemos leer esta Política de Privacidad antes de
              proporcionarnos sus datos personales de manera facultativa y, si
              está de acuerdo, marcar el recuadro de aceptación de manera previa
              y expresa. Estos datos son necesarios para cumplir con las
              finalidades descritas en la presente Política de Privacidad por lo
              que, al no permitir su tratamiento, impediría estar en condiciones
              para cumplir las mismas. De ingresar información personal de un
              tercero, usted declara contar con la autorización del mismo para
              el tratamiento de sus datos personales de acuerdo a los términos
              establecidos en la presente Política de Privacidad.
            </p>
            <hr className="w-full h-[2px] bg-gray-200 my-1" />
            <p className="text-xs md:text-sm">
              <strong>Marco normativo y principios rectores</strong>
              <br />
              Esta Política de Privacidad se encuentra regulada por la
              legislación peruana y en particular por:
              <br />• Ley No. 29733 (en adelante, “Ley”).
              <br />• Decreto Supremo No. 003-2013-JUS, que aprueba el
              Reglamento de la Ley No. 29733 (en adelante, “Reglamento”).
              <br />• Directiva de Seguridad de la Información, aprobada por la
              Resolución Directoral No. 019-2013-JUS/DGPDP (en adelante,
              “Directiva”).
              <br />• Ley No. 29571, Código de Protección y Defensa del
              Consumidor.
            </p>
            <hr className="w-full h-[2px] bg-gray-200 my-1" />
            <p className="text-xs md:text-sm">
              <strong>¿Qué información recolectamos?</strong>
              <br />
              Firstmed recopila la siguiente información:
              <br />
              A. Datos personales proporcionados libremente por el Usuario al
              momento de registrarse, crearse una cuenta, solicitar lo contacten
              y/o hacer una compra. Cuando el Usuario se registra para hacer una
              compra mediante el Sitio web y app de Firstmed o deja sus datos
              para que el Call Center se contacte con él, debe completar
              formularios donde se le podrá solicitar proporcionar su nombre y/o
              apellidos y/o número de DNI/CE y/o fecha de nacimiento y/o sexo
              y/o número de celular y/o número de teléfono fijo y/o dirección de
              domicilio y/o correo electrónico.
            </p>
            <p className="text-xs md:text-sm">
              B. Información que se recolecta cuando el Usuario utiliza el Sitio
              Web y app de Firstmed, entre la que se incluye (i) información
              sobre las actividades realizadas por el Usuario mientras navega y
              utiliza el Sitio Web, tales como comportamientos y hábitos de uso,
              historial de búsquedas y compras del Usuario; (ii) la URL de la
              que proviene el Usuario (incluyendo las externas al Sitio Web);
              (iii) URLs más visitadas por el Usuario (incluyendo las externas
              al Sitio Web); (iv) direcciones IP; (v) navegador que utiliza el
              Usuario (vi) información sobre aspectos operativos del Sitio Web
              Firstmed, como análisis y estadísticas de navegación, tráfico,
              entre otros; (vii) Información sobre el modelo de teléfono celular
              del Usuario y el sistema operativo móvil; (viiii) información que
              permita elaborar un reporte sobre términos de búsqueda; (ix)
              Ubicación del Usuario, entre otros (en adelante, “Información de
              Uso”).
              <br />
              C. Datos Personales proporcionados por el Usuario a través de
              nuestro Chat, para el reporte de incidentes o inconvenientes con
              su compra a través de nuestro Sito Web. En estos casos Usuario
              deberá ingresar su nombre y apellido, correo electrónico y número
              de teléfono/celular con el que afilio la compra.
              <br />
              D. Datos personales proporcionados libremente por el Usuario al
              momento de registrar su queja, reclamo o solicitud en general.
              Cuando el Usuario registra su queja, reclamo o solicitud en el
              Sitio web o de forma presencial en nuestros establecimientos
              comerciales, debe completar formularios donde se le solicita
              proporcionar su nombre, apellidos, tipo y número de documento de
              identidad, número de celular, número de teléfono fijo, dirección
              de domicilio y correo electrónico.
            </p>
            <hr className="w-full h-[2px] bg-gray-200 my-1" />
            <p className="text-xs md:text-sm">
              <strong>¿Para qué utilizamos la Información del Usuario?</strong>
              <br />
              Dependiendo de cómo el Usuario interactúe en nuestro sitio web y
              app, su información se utilizará para las siguientes finalidades:
              <br />
              1. Contactar al Usuario para el registro de su compra.
              <br />
              2. Contactar al Usuario para brindarle información sobre nuestras
              formulaciones.
              <br />
              3. Atender el registro del Usuario y brindar soporte técnico.
              <br />
              4. Verificar y validar la identidad del Usuario.
              <br />
              5. Recopilar información sobre las actividades realizadas por el
              Usuario mientras navega en la plataforma y efectúa compras, con la
              finalidad de poder ofrecerle a dicho Usuario contenido
              personalizado sobre la base de sus intereses y necesidades. Por
              ejemplo, el Usuario podrá acceder a su historial de compras.
              <br />
              6. Utilizar los Datos Personales para brindar el servicio de
              entrega a domicilio o delivery.
              <br />
              7. Atender las quejas, reclamos o solicitudes del Usuario y
              brindar soporte necesario.
              <br />
              8. Análisis estadístico para la elaboración de estrategias
              comerciales, de manera anonimizada o disociada.
              <br />
              El Usuario manifiesta expresamente que ha sido debidamente
              informado de todas las finalidades antes mencionadas. Asimismo, a
              través de la aceptación de la presente Política de Privacidad, el
              Usuario autoriza y otorga su consentimiento, de manera previa,
              libre, expresa e inequívoca y gratuita, para el tratamiento de sus
              Datos Personales. En caso no acepte el tratamiento adicional de
              sus datos personales descrito en documento aparte, si lo hubiera,
              esto no afectará la prestación del servicio contratado. Asimismo,
              el Usuario reconoce y acepta que cualquier tratamiento de la
              Información del Usuario que sea necesario para la ejecución de la
              relación contractual que vincula al Usuario con Firstmed no
              requieren de su consentimiento y sólo de ser informado al Usuario.
            </p>
            <hr className="w-full h-[2px] bg-gray-200 my-1" />
            <p className="text-xs md:text-sm">
              <strong>Carácter de la información</strong>
              <br />
              La información que proporciona el Titular en los formularios de
              “Pautas digitales” es necesaria para cumplir con las finalidades
              descritas anteriormente, por lo que, al no permitir su
              tratamiento, no podrá acceder a los servicios descritos en el
              presente documento.
            </p>
            <hr className="w-full h-[2px] bg-gray-200 my-1" />
            <p className="text-xs md:text-sm">
              <strong>
                Bancos de datos personales y plazo de conservación.
              </strong>
              <br />
              Los datos personales del Usuario serán almacenados en los bancos
              de datos de titularidad de Firstmed, conforme a lo siguiente:
              <br />• Los datos personales ingresados para el registro de una
              compra, y todo lo derivado de ello, se almacenarán en el banco de
              datos denominado “Pedidos”.
              <br />• Los datos personales ingresados por Formularios de Pautas
              Digitales y todo lo derivado de ello, se almacenarán en el banco
              de datos denominado “Clientes”.
              <br />• Los datos personales ingresados en el Libro de
              Reclamaciones o a través de la solicitud ARCO se almacenarán en el
              banco de datos denominado “Reclamantes”. El Usuario otorga su
              consentimiento expreso para la inclusión de sus Datos Personales
              en el Banco de Datos de Firstmed que le corresponda según su
              condición. Los datos personales de los Usuarios se conservarán por
              el tiempo necesario para cumplir con las finalidades de
              tratamiento y/o hasta que el Titular revoque su consentimiento,
              luego de los cuales serán eliminados en cumplimiento con la Ley y
              normativa aplicable.
            </p>
            <hr className="w-full h-[2px] bg-gray-200 my-1" />
            <p className="text-xs md:text-sm">
              <strong>Sobre la veracidad de los Datos Personales</strong>
              <br />
              El Usuario declara que los Datos Personales proporcionados son
              verdaderos, completos y exactos. Cada Usuario es responsable por
              la veracidad, exactitud, vigencia y autenticidad de los Datos
              Personales suministrados y se compromete a mantenerlos debidamente
              actualizados. Sin perjuicio de lo anterior, el Usuario autoriza a
              Inkafarma a verificar la veracidad de los Datos Personales
              facilitados a través de información obtenida de fuentes de acceso
              público o de entidades especializadas en la provisión de dicha
              información. Firstmed no se hace responsable de la veracidad de la
              información que no sea de elaboración propia, por lo que tampoco
              asume responsabilidad alguna por posibles daños o perjuicios que
              pudieran originarse por el uso de dicha información.
            </p>
            <hr className="w-full h-[2px] bg-gray-200 my-1" />
            <p className="text-xs md:text-sm">
              <strong>¿Cómo resguardamos la Información del Usuario?</strong>
              <br />
              Firstmed adopta las medidas de seguridad necesarias para
              garantizar la protección de la información del Usuario para evitar
              su alteración, pérdida, tratamiento y/o acceso no autorizado,
              habida cuenta del estado de la técnica, la naturaleza de los datos
              almacenados y los riesgos a que están expuestos. En este sentido,
              Firstmed usará los estándares de la industria en materia de
              protección de la confidencialidad de la información del Usuario y
              declara emplear diversas medidas de seguridad para evitar accesos
              no autorizados. No obstante, Firstmed no se hace responsable por
              interceptaciones ilegales o violación de sus sistemas o bases de
              datos por parte de personas no autorizadas, así como la indebida
              utilización de la información obtenida por esos medios, o de
              cualquier intromisión ilegítima que escape al control y debida
              diligencia de Firstmed y que no le sea imputable. Firstmed tampoco
              se hace responsable de posibles daños o perjuicios que se pudieran
              derivar de interferencias, omisiones, interrupciones, virus
              informáticos, averías telefónicas o desconexiones en el
              funcionamiento operativo de este sistema electrónico, motivadas
              por causas ajenas a Firstmed y que no hayan podido evitarse con
              debida diligencia; de retrasos o bloqueos en el uso de la
              plataforma informática causados por deficiencias o sobrecargas en
              el Centro de Procesos de Datos, en el sistema de Internet o en
              otros sistemas electrónicos.
            </p>
            <hr className="w-full h-[2px] bg-gray-200 my-1" />
            <p className="text-xs md:text-sm">
              <strong>Divulgación</strong>
              <br />
              Firstmed se compromete a no divulgar o compartir los Datos
              Personales del Usuario, sin que haya prestado el debido
              consentimiento para ello, con excepción de los siguientes casos:
              <br />• Solicitudes de información de autoridades públicas en
              ejercicio de sus funciones y el ámbito de sus competencias.
              <br />• Solicitudes de información en virtud de órdenes
              judiciales.
              <br />• Solicitudes de información en virtud de disposiciones
              legales.
              <br />
              <strong>Cookies</strong>
              <br />
              El Sitio Web y App de Firstmed utilizan cookies. Una “Cookie” es
              un pequeño archivo de texto que un sitio web almacena en el
              navegador del Usuario. Las cookies facilitan el uso y la
              navegación por un sitio web y son de importancia esencial para el
              buen funcionamiento de Internet, aportando innumerables ventajas
              en la prestación de servicios interactivos. A través de las
              cookies, los sitios web y aplicaciones móviles pueden utilizar la
              información de su visita para realizar evaluaciones y cálculos
              estadísticos sobre datos anónimos, así como para garantizar la
              continuidad del servicio o para realizar mejoras. Asimismo, la
              información obtenida a través de las cookies también se utiliza
              para analizar los hábitos de navegación del Usuario y las
              búsquedas realizadas por éste, a fin de mejorar sus iniciativas
              comerciales y promocionales, mostrando publicidad que pueda ser de
              su interés, y personalizando los contenidos. Las cookies pueden
              borrarse del disco duro si el Usuario así lo desea. La mayoría de
              los navegadores aceptan las cookies de forma automática, pero le
              permiten al Usuario cambiar la configuración de su navegador para
              que rechace la instalación de cookies, sin que ello perjudique su
              acceso y navegación. En el supuesto que en el sitio web y app
              Firstmed se dispusieran enlaces o hipervínculos que te
              redireccione a otros lugares de Internet, que son de propiedad de
              terceros que utilicen cookies; Firstmed no se hace responsable del
              uso de cookies por parte de dichos terceros.
            </p>
            <hr className="w-full h-[2px] bg-gray-200 my-1" />
            <p className="text-xs md:text-sm">
              <strong>Edad de Consentimiento</strong>
              <br />
              Al brindar sus datos personales a Firstmed, el Usuario declara
              tener al menos dieciocho años de edad o ser tutor de un menor de
              edad para otorgar el consentimiento de forma válida de acuerdo a
              la Ley. Firstmed no llevará a cabo voluntariamente el tratamiento
              de Datos Personales relativos a menores de edad, salvo que se
              cuenten con el debido consentimiento de acuerdo a la norma
              aplicable. En el supuesto de que se tenga conocimiento que los
              Datos Personales recogidos corresponden a un menor de edad sin
              autorización de su tutor legal, se adoptarán las medidas oportunas
              para eliminarlos.
            </p>
            <hr className="w-full h-[2px] bg-gray-200 my-1" />
            <p className="text-xs md:text-sm">
              <strong>Cesión de Posición Contractual</strong>
              <br />
              El Usuario autoriza expresamente la cesión de esta Política y de
              su información en favor de cualquier persona que (i) quede
              obligada por la presente Política; y/o (ii) que sea el nuevo
              encargado del banco de datos que contenga la Información del
              Usuario. Luego de producida la cesión, Firstmed no tendrá ninguna
              responsabilidad con respecto de cualquier hecho que ocurra a
              partir de la fecha de la cesión. El nuevo responsable del banco de
              datos asumirá todas y cada una de las obligaciones establecidas en
              la presente Política respecto al tratamiento, resguardo y
              conservación de la información anteriormente detallada.
            </p>
            <hr className="w-full h-[2px] bg-gray-200 my-1" />
            <p className="text-xs md:text-sm">
              <strong>Modificaciones de la Política de Privacidad</strong>
              <br />
              Firstmed se reserva expresamente el derecho a modificar,
              actualizar o completar en cualquier momento la presente Política
              de Privacidad. Cualquier modificación, actualización o ampliación
              producida en la presente Política de Privacidad será
              inmediatamente publicada en el sitio web y app Firstmed, por lo
              cual el Usuario estará enterado de qué información recopilamos y
              bajo qué circunstancias, y se solicitará el consentimiento al
              acceder nuevamente a dichos servicios.
            </p>
            <hr className="w-full h-[2px] bg-gray-200 my-1" />
            <p className="text-xs md:text-sm pb-12 md:pb-9">
              <strong>Fecha de última actualización: junio 2024.</strong>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Terms;
