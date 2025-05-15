export default {
    name: "app",
    components: {
    },
    data() {
        return {
            busquedaPorNombreCompleto: '',
            busquedaPorDni: '',
            personas: [
                {
                    nombre: "Daniel",
                    apellido: "Sanchez",
                    correo: "danielsanchez68@hotmail.com",
                    dni: "20442873"
                },
                {
                    nombre: "Juan",
                    apellido: "Perez",
                    correo: "j@p.gmail.com",
                    dni: "12345678"
                },
                {
                    nombre: "Ana",
                    apellido: "Suarez",
                    correo: "a@s.gmail.com",
                    dni: "87654321"
                },
                {
                    nombre: "Ariel",
                    apellido: "Berinstein",
                    correo: "beriari@a.b.gmail.com",
                    dni: "42000000"
                },
                {
                    nombre: "Candela",
                    apellido: "Berinstein",
                    correo: "beriari@a.b.gmail.com",
                    dni: "43000000"
                },
            ]
        }
    },
    computed: {
        personasFiltradas() {

            if (this.errorCaracteresMinimos.error) {
                return []
            }

            return this.personas.filter((persona) => {
                let nombreCompleto = this.getNombreCompleto(persona)
                let dni = persona.dni

                let coincideNombreCompleto = nombreCompleto.toLowerCase().includes(this.busquedaPorNombreCompleto.toLowerCase())
                let coincideDni = dni.includes(this.busquedaPorDni)

                return coincideNombreCompleto && coincideDni
            });
        },
        errorCaracteresMinimos() {
            let mensaje =''
            if ((this.busquedaPorDni && this.busquedaPorDni.length < 3) || (this.busquedaPorNombreCompleto && this.busquedaPorNombreCompleto.length < 3)) {
                mensaje = 'La busqueda por nombre debe tener al menos 3 caracteres'
            }
            return {
                error: mensaje !== '',
                mensaje: mensaje
            }
        },
    },
    methods: {
        getNombreCompleto(persona) {
            return `${persona.nombre} ${persona.apellido}`
        }
    }
}